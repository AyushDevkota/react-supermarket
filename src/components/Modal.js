import React, { useContext, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { modalContext } from "../App";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal }) => {
	let navigate = useNavigate();
	const { modalContent, addToCart, cartData, updateCart, currentUser } =
		useContext(modalContext);
	const [value, setValue] = useState(1);

	const checkCart = (id, val, price) => {
		if (!currentUser) {
			navigate("/login");
			return;
		}
		console.log(cartData);
		const product = cartData.cartProducts.filter(
			(product) => product.product.id === id
		);
		if (product.length === 0) {
			addToCart({
				productId: id,
				quantity: value,
				priceId: price,
				note: "test",
			});
		} else {
			updateCart({ quantity: val, id: product[0].id });
		}
	};
	return (
		<div className="fixed z-50 inset-0 overflow-y-auto">
			<div className="flex items-center justify-center min-h-screen pt-4 mx-auto pb-20 ">
				<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
				<div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle ">
					<span
						className="absolute text-2xl cursor-pointer right-2 top-2"
						onClick={closeModal}
					>
						<IoIosClose />
					</span>
					<div className="bg-white px-4 pt-7 pb-4 sm:p-6 sm:pb-4">
						<div className="sm:flex sm:items-start">
							<div className="flex flex-col gap-5 mt-3 sm:mt-0 sm:ml-4 sm:text-left lg:flex-row">
								<img
									src={modalContent.images[0].imageName}
									alt={modalContent.title}
									className="w-full lg:w-1/2"
								/>
								<div className="space-y-4">
									<h2 className="text-2xl text-orange font-bold">
										{modalContent.title}
									</h2>
									<p className="text-orange font-semibold">
										NRS {modalContent.unitPrice[0].sellingPrice * value}&nbsp;
										(Including Tax)
									</p>
									<div className="flex gap-5">
										<Counter value={value} setValue={setValue} />
										<button
											className="bg-btnblue text-white px-12 py-2 rounded-full uppercase hover:bg-orange"
											onClick={() =>
												checkCart(
													modalContent.id,
													value,
													modalContent.unitPrice[0].id
												)
											}
										>
											Add to cart
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

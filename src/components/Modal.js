import React, { useContext, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { modalContext } from "../App";

const Modal = ({ closeModal }) => {
	const { cart, total, setTotal, deleteItem } = useContext(modalContext);
	useEffect(() => {
		setTotal(
			cart
				.map((item) => item.discount_price * item.qty)
				.reduce((prev, curr) => prev + curr, 0)
		);
		return () => {};
	}, [cart, setTotal]);

	return (
		<article className="flex justify-center">
			<div className="fixed z-50 w-11/12 md:max-w-xl mx-auto">
				<div className="relative bg-bgmodal border border-bordermodal rounded shadow-modal top-16">
					<span
						className="absolute right-2 top-2 text-2xl cursor-pointer"
						onClick={closeModal}
					>
						<IoIosClose />
					</span>
					<div className="mt-8 p-2 md:p-5">
						<div className="border border-grayccc rounded py-4 px-2  bg-white">
							<ul>
								{cart.map(({ id, title, discount_price, qty }) => {
									return (
										<div key={id}>
											<li className="flex items-center">
												<div className="text-sm w-3/5 lg:text-base">
													<h3 className="font-semibold lg:font-bold">
														{title}
													</h3>
												</div>
												<div className="w-1/6">
													<input
														type="number"
														name="quantity"
														value={qty}
														onChange={() => console.log("Hello")}
														autoComplete="off"
														className="w-8 h-5 text-xs border border-grayccc rounded modal-num text-right px-1"
													/>
												</div>
												<div className="w-1/12">
													<button
														className="bg-btnblue text-tiny px-1 md:text-xs lg:px-2 lg:py-1 text-white"
														onClick={() => deleteItem(id)}
													>
														X
													</button>
												</div>
												<div className="text-right text-sm w-1/6 lg:text-base">
													<span>${(discount_price * qty).toFixed(2)}</span>
												</div>
											</li>
											<li>
												<p className="text-nine text-sm lg:text-base lg:pt-1">
													Discount: $1.00
												</p>
											</li>
											<hr className="my-2"></hr>
										</div>
									);
								})}
							</ul>
						</div>
						<div className="px-3 text-sm py-4 font-semibold md:text-base md:px-8">
							<h2>Subtotal: ${total.toFixed(2)}</h2>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Modal;

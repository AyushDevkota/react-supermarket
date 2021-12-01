import React, { useContext } from "react";
import { modalContext } from "../App";

const Table = () => {
	const { deleteItem, cartData } = useContext(modalContext);
	let numberOfProducts, content;
	if (cartData !== undefined || cartData.length > 0) {
		numberOfProducts = cartData.cartProducts.length;
		content = cartData.cartProducts.map(
			(
				{
					id,
					product: {
						images: [{ imageName }],
						title,
					},
					price,
					quantity,
				},
				idx
			) => {
				return (
					<tr key={id} className="text-center">
						<td className="border">{idx + 1}</td>
						<td className="border">
							<div className="flex justify-center items-center">
								<img
									src={imageName}
									alt={title}
									className="w-10 md:w-20 py-3"
								/>
							</div>
						</td>
						<td className="border">{quantity}</td>
						<td className="border">{title}</td>
						<td className="border">NRS {price}</td>
						<td className="border">
							<div className="flex justify-center items-center">
								<button
									className="border font-bold h-5 w-5 flex justify-center items-center bg-gray-500 text-white md:h-8 md:w-8"
									onClick={() => deleteItem(id)}
								>
									X
								</button>
							</div>
						</td>
					</tr>
				);
			}
		);
	}

	return (
		<section className="px-4 py-8 md:px-8 md:max-w-3xl mx-auto lg:max-w-4xl lg:px-0 xl:max-w-6xl lg:pb-16">
			<h1 className="font-semibold mb-12">
				YOUR SHOPPING CART CONTAINS:
				<span className="text-btnblue">&nbsp;{numberOfProducts} PRODUCTS</span>
			</h1>
			<table className="border w-full mx-auto text-xs md:text-base">
				<thead>
					<tr className="bg-orange text-white text-center">
						<th className="py-2">SL. NO.</th>
						<th className="py-2">Product</th>
						<th className="py-2">Quantity</th>
						<th className="py-2">Product Name</th>
						<th className="py-2">Price</th>
						<th className="py-2">Remove</th>
					</tr>
				</thead>
				<tbody>{content}</tbody>
			</table>
			<div className="pt-10 flex flex-col justify-between items-center">
				<div className="mx-auto uppercase py-4 text-xl lg:text-3xl font-semibold">
					Total - NRS {cartData.total}
				</div>
				<button className="px-4 py-2 text-white uppercase rounded-2xl bg-btnblue hover:bg-orange">
					proceed to checkout
				</button>
			</div>
		</section>
	);
};

export default Table;

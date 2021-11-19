import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../Data/TableData";
import Counter from "./Counter";
import Img2 from "../images/icon2.png";

const Table = () => {
	const [quantity, setQuantity] = useState(Array(data.length).fill(1));
	return (
		<section className="container mx-auto py-20">
			<h1 className="font-semibold mb-12">
				YOUR SHOPPING CART CONTAINS:
				<span className="text-btnblue">&nbsp;{data.length} PRODUCTS</span>
			</h1>
			<table className="w-full mx-auto border">
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
				<tbody>
					{data.map(({ id, img, name, price }, index) => {
						return (
							<tr key={id} className="text-center">
								<td className="border">{id}</td>
								<td className="border">
									<div className="w-28 h-20 mx-auto flex justify-center ">
										<img src={img} alt={name} className="h-full" />
									</div>
								</td>
								<td className="border">
									<Counter
										value={quantity[index]}
										onIncrement={() => {
											const quantityCopy = [...quantity];
											quantityCopy[index] += 1;
											setQuantity(quantityCopy);
										}}
										onDecrement={() => {
											const quantityCopy = [...quantity];
											if (quantityCopy[index] === 1) return;
											quantityCopy[index] -= 1;
											setQuantity(quantityCopy);
										}}
									/>
								</td>
								<td className="border">{name}</td>
								<td className="border">${price * quantity[index]}.00</td>
								<td className="border">
									<div className="flex justify-center items-center">
										<button className="border font-bold h-10 w-10 flex justify-center items-center bg-gray-500 text-white">
											X
										</button>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="pt-10 flex justify-between items-center">
				<div>
					<button className="bg-btnblue uppercase text-white font-bold py-4 px-12 hover:bg-orange">
						<Link to="/products">continue to basket</Link>
					</button>
					<ul className="pt-8">
						<div className="space-y-2">
							<li className="flex justify-between text-nine">
								<p>Product 1</p>
								<p>$30.00</p>
							</li>
							<li className="flex justify-between text-nine">
								<p>Product 2</p>
								<p>$30.00</p>
							</li>
							<li className="flex justify-between text-nine">
								<p>Product 3</p>
								<p>$30.00</p>
							</li>
							<li className="flex justify-between text-nine">
								<p>Total Service Charges</p>
								<p>$15.00</p>
							</li>
						</div>
						<div className="flex justify-between mt-4 border-t border-b py-4 text-lg font-semibold">
							<p>Total -</p>
							<p>$105.00</p>
						</div>
					</ul>
				</div>
				<div>
					<button className="bg-gray-300 capitalize text-textForm font-bold py-4 px-3 flex items-center gap-2 hover:bg-orange">
						<img src={Img2} alt="left arrow" />
						<Link to="/single">continue shopping</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Table;

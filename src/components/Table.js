import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import Img2 from "../images/icon2.png";
import { modalContext } from "../App";

const Table = () => {
	const { cart, deleteItem, setCart, total, setTotal } =
		useContext(modalContext);
	useEffect(() => {
		setTotal(
			cart
				.map((item) => item.discount_price * item.qty)
				.reduce((prev, curr) => prev + curr, 0)
		);
		return () => {};
	}, [cart, setTotal]);
	const onIncrement = (id) => {
		for (let i in cart) {
			if (cart[i].id === id) {
				const newCart = [...cart];
				newCart[i].qty += 1;
				setCart(newCart);
				return;
			}
		}
	};
	const onDecrement = (id) => {
		for (let i in cart) {
			if (cart[i].id === id) {
				if (cart[i].qty === 1) return;
				const newCart = [...cart];
				newCart[i].qty -= 1;
				setCart(newCart);
				return;
			}
		}
	};
	return (
		<section className="px-4 py-8 md:px-8 md:max-w-3xl mx-auto lg:max-w-4xl lg:px-0 xl:max-w-6xl lg:pb-16">
			<h1 className="font-semibold mb-12">
				YOUR SHOPPING CART CONTAINS:
				<span className="text-btnblue">&nbsp;{cart.length} PRODUCTS</span>
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
				<tbody>
					{cart.map(({ id, img, title, discount_price, qty }) => {
						return (
							<tr key={id} className="text-center">
								<td className="border">{id}</td>
								<td className="border">
									<div className="flex justify-center items-center">
										<img src={img} alt={title} className="w-10 md:w-20" />
									</div>
								</td>
								<td className="border py-2">
									<Counter
										value={qty}
										id={id}
										onIncrement={onIncrement}
										onDecrement={onDecrement}
									/>
								</td>
								<td className="border">{title}</td>
								<td className="border">${(discount_price * qty).toFixed(2)}</td>
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
					})}
				</tbody>
			</table>
			<div className="pt-10 flex flex-col md:flex-row justify-between items-center">
				<div>
					<button className="bg-btnblue uppercase text-white font-bold py-4 px-12 hover:bg-orange xl:text-lg">
						<Link to="/products">continue to basket</Link>
					</button>
					<ul className="pt-8">
						<div className="space-y-2 text-sm xl:text-base">
							{cart.map(({ id, title, discount_price, qty }) => {
								return (
									<li className="flex justify-between text-nine" key={id}>
										<p>{title}</p>
										<p>${(discount_price * qty).toFixed(2)}</p>
									</li>
								);
							})}
						</div>
						<div className="flex justify-between mt-4 border-t border-b py-4 text-base font-semibold">
							<p>Total -</p>
							<p>${total.toFixed(2)}</p>
						</div>
					</ul>
				</div>
				<div className="mt-4 xl:text-lg">
					<button className="bg-gray-300 capitalize text-textForm font-bold py-2 px-3 flex items-center gap-2 hover:bg-orange">
						<img src={Img2} alt="left arrow" />
						<Link to="/single">continue shopping</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Table;

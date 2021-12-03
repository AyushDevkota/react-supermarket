import React, { useState, useEffect, useContext } from "react";
import PageTitle from "./PageTitle";
import { useParams } from "react-router-dom";
import { modalContext } from "../App";
import Item from "./Item";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
	let navigate = useNavigate();
	const [products, setProducts] = useState([]);
	const [value, setValue] = useState(1);
	const { base_url, api_key, currentUser, updateCart, addToCart, cartData } =
		useContext(modalContext);
	const { slug } = useParams();
	const fetchData = async () => {
		const response = await fetch(`${base_url}/api/v4/product`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Api-key": api_key,
				"Warehouse-Id": 1,
			},
		});
		const data = await response.json();
		setProducts(data.data);
	};
	useEffect(() => fetchData(), []);

	const checkCart = (id, val, price) => {
		if (!currentUser) {
			navigate("/login");
			return;
		}
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

	let content = <p></p>;
	if (products.length > 0) {
		const matchedProduct = products.filter(
			(product) => product.slug === slug
		)[0];
		content = (
			<>
				<PageTitle title={matchedProduct.title} />
				<div className=" mb-16 sm:p-6 sm:pb-4">
					<div className="sm:flex sm:items-start">
						<div className="flex flex-col gap-5 mt-3 sm:mt-0 sm:text-left lg:flex-row lg:gap-12">
							<img
								src={matchedProduct.images[0].imageName}
								alt={matchedProduct.title}
								className="w-full"
							/>
							<div className="space-y-4 w-full">
								<h2 className="text-2xl text-orange font-bold">
									{matchedProduct.title}
								</h2>
								<p className="font-semibold">
									Category:{" "}
									<span className="text-orange">
										{matchedProduct.categoryTitle}
									</span>
								</p>
								<p className="text-orange font-semibold">
									NRS {matchedProduct.unitPrice[0].sellingPrice * value}
									(Including Tax)
								</p>
								<div className="flex gap-5">
									<Counter value={value} setValue={setValue} />
									<button
										className="bg-btnblue text-white px-12 py-2 rounded-full uppercase hover:bg-orange"
										onClick={() =>
											checkCart(
												matchedProduct.id,
												value,
												matchedProduct.unitPrice[0].id
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
				<PageTitle title="you might also like" />
				<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
					{products
						.filter(
							(product) =>
								product.categoryTitle === matchedProduct.categoryTitle
						)
						.map((filteredCategory) => (
							<Item
								data={filteredCategory}
								key={filteredCategory.id}
								loading="lazy"
							/>
						))}
				</div>
			</>
		);
	}

	return (
		<section className="px-4 py-8 md:px-8 md:pb-16 md:max-w-3xl lg:max-w-4xl lg:px-0 mx-auto xl:max-w-6xl ">
			{content}
		</section>
	);
};

export default SingleProduct;

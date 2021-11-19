import React from "react";
import { AiFillStar } from "react-icons/ai";
import NewOffers from "./NewOffers";

const SingleProduct = ({
	img,
	title,
	description,
	discount_price,
	full_price,
}) => {
	return (
		<section className="container mx-auto">
			<div className="py-20 flex gap-24">
				<div className="shadow-2xl flex justify-center items-center w-1/3">
					<img src={img} alt="single product" className="" />
				</div>
				<div className="w-1/2">
					<h1 className="uppercase font-bold text-3xl text-textForm mb-8">
						{title}
					</h1>
					<div className="flex mb-8">
						<AiFillStar color={"#3399cc"} />
						<AiFillStar color={"#3399cc"} />
						<AiFillStar color={"#3399cc"} />
						<AiFillStar color={"#3399cc"} />
						<AiFillStar color={"#808080"} />
					</div>
					<p className="uppercase font-semibold mb-1">description :</p>
					<p className="text-nine text-sm leading-6 mb-8">{description}</p>
					<div className="flex gap-4 mb-8">
						<p className="font-semibold">${discount_price}.00</p>
						<del>${full_price}.00</del>
					</div>
					<button className="bg-btnblue text-white py-1 px-8 uppercase hover:bg-orange">
						add to cart
					</button>
				</div>
			</div>
			<NewOffers />
		</section>
	);
};

export default SingleProduct;

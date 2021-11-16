import React from "react";
import { AiFillStar } from "react-icons/ai";

const Item = ({ id, img, title, discount_price, full_price }) => {
	return (
		<article className="bg-white w-11/12 mx-auto border-2 border-darkgrayborder py-8">
			<img src={img} alt={title} className="w-1/2 mx-auto" />
			<h5 className="py-4">{title}</h5>
			<div className="flex justify-center">
				<AiFillStar color={"#3399cc"} />
				<AiFillStar color={"#3399cc"} />
				<AiFillStar color={"#3399cc"} />
				<AiFillStar color={"#3399cc"} />
				<AiFillStar color={"#808080"} />
			</div>
			<div className="py-4 flex justify-center gap-4">
				<span>
					<strong>${discount_price}</strong>
				</span>
				<span>
					<del>${full_price}.00</del>
				</span>
			</div>
			<button className="bg-btnblue text-white uppercase w-8/12 py-2 hover:bg-orange">
				Add to cart
			</button>
		</article>
	);
};

export default Item;

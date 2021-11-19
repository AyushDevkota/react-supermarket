import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import Offer from "../images/offer.png";
import AddBtn from "./AddBtn";
import { modalContext } from "../App";

const Item = ({ id, img, title, discount_price, full_price }) => {
	const { showModal } = useContext(modalContext);
	return (
		<article className="bg-white w-11/12 mx-auto border border-darkgrayborder py-8 relative">
			<img src={img} alt={title} className="mx-auto" />
			<h5 className="py-4 text-sm">{title}</h5>
			<div className="flex justify-center">
				<AiFillStar color={"#3399cc"} />
				<AiFillStar color={"#3399cc"} />
				<AiFillStar color={"#3399cc"} />
				<AiFillStar color={"#3399cc"} />
				<AiFillStar color={"#808080"} />
			</div>
			<div className="py-4 flex justify-center gap-4 text-sm">
				<span>
					<strong>${discount_price}</strong>
				</span>
				<span>
					<del>${full_price}.00</del>
				</span>
			</div>
			<AddBtn showModal={showModal} />
			<img src={Offer} alt="offer tag" className="absolute top-0 right-0" />
		</article>
	);
};

export default Item;

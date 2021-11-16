import React from "react";
import Item from "./Item";
import Img1 from "../images/14.png";
import Img2 from "../images/15.png";
import Img3 from "../images/16.png";
import Img4 from "../images/17.png";

const data = [
	{
		id: 1,
		img: Img1,
		title: "Fried-Gram",
		discount_price: 35.99,
		full_price: 55.0,
	},
	{
		id: 2,
		img: Img2,
		title: "Navaratan-Dal",
		discount_price: 30.99,
		full_price: 45.0,
	},
	{
		id: 3,
		img: Img3,
		title: "White-Peasmatar",
		discount_price: 80.99,
		full_price: 105.0,
	},
	{
		id: 4,
		img: Img4,
		title: "Channa-Dal",
		discount_price: 35.99,
		full_price: 55.0,
	},
];
const NewOffers = () => {
	return (
		<section className="bg-grayf5 py-20">
			<div className="container mx-auto">
				<h3 className="sub-title">New Offers</h3>
				<div className="underline"></div>
				<div className="grid grid-cols-custom4Grid text-center">
					{data.map((item) => {
						return <Item key={item.id} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default NewOffers;

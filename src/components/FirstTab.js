import React from "react";
import Img1 from "../images/1.png";
import Img2 from "../images/2.png";
import Img3 from "../images/3.png";
import Img4 from "../images/4.png";
import Img5 from "../images/5.png";
import Img6 from "../images/6.png";
import Item from "./Item";

const data = [
	{
		id: 1,
		img: Img1,
		title: "Tata-Salt",
		discount_price: 20.99,
		full_price: 35.0,
	},
	{
		id: 2,
		img: Img2,
		title: "Fortune-Sunflower",
		discount_price: 20.99,
		full_price: 35.0,
	},
	{
		id: 3,
		img: Img3,
		title: "Aashirvaad-Atta",
		discount_price: 40.99,
		full_price: 65.0,
	},
	{
		id: 4,
		img: Img4,
		title: "Sampann-Toor-Dal",
		discount_price: 35.99,
		full_price: 55.0,
	},
	{
		id: 5,
		img: Img5,
		title: "Parryss-Sugar",
		discount_price: 30.99,
		full_price: 45.0,
	},
	{
		id: 6,
		img: Img6,
		title: "Saffola-Gold",
		discount_price: 80.99,
		full_price: 105.0,
	},
];

const FirstTab = ({ title }) => {
	return (
		<div>
			<h3 className="text-2xl capitalize">{title}</h3>
			<p className="w-1/2 my-6 text-sm text-darkgray">
				We've pulled together all our advertised offers into one place, so you
				won't miss out on a great deal.
			</p>
			<div className="mb-8 grid grid-cols-3 place-items-center text-center gap-x-0 gap-y-8">
				{data.map((item) => {
					return <Item key={item.id} {...item} />;
				})}
			</div>
		</div>
	);
};

export default FirstTab;

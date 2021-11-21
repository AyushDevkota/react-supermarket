import React from "react";
import Item from "./Item";
import PageTitle from "./PageTitle";
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
		<section className="bg-grayf5 py-8 md:px-8 md:pb-16">
			<div className="md:max-w-3xl lg:max-w-4xl mx-auto xl:max-w-6xl">
				<PageTitle title="new offers" />
				<div className="pt-4 grid px-8 md:px-0 space-y-2 text-center md:grid-cols-2 md:space-y-0 md:gap-y-4 lg:grid-cols-4">
					{data.map((item) => {
						return <Item key={item.id} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default NewOffers;

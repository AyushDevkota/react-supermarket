import React from "react";
import { data } from "../Data/ItemData";
import Item from "./Item";

const SecondTab = ({ title }) => {
	return (
		<div>
			<h3 className="text-2xl capitalize">{title}</h3>
			<p className="w-1/2 my-6 text-sm text-darkgray">
				We've pulled together all our advertised offers into one place, so you
				won't miss out on a great deal.
			</p>
			<div className="mb-8 grid grid-cols-3 place-items-center text-center gap-x-0 gap-y-8 ">
				{data.map((item) => {
					return <Item key={item.id} {...item} />;
				})}
			</div>
		</div>
	);
};

export default SecondTab;

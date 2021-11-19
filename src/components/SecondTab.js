import React from "react";
import { data } from "../Data/ItemData";
import Item from "./Item";

const SecondTab = ({ title }) => {
	return (
		<div>
			<h3 className="text-lg capitalize font-bold md:w-1/2 md:px-8 md:text-xl md:pt-3">
				{title}
			</h3>
			<p className="text-sm py-3 text-darkgray md:w-1/2 md:px-8 md:text-base md:mb-3">
				We've pulled together all our advertised offers into one place, so you
				won't miss out on a great deal.
			</p>
			<div className="grid space-y-2 text-center md:grid-cols-3 md:gap-y-8 md:my-3 md:space-y-0">
				{data.map((item) => {
					return <Item key={item.id} {...item} />;
				})}
			</div>
		</div>
	);
};

export default SecondTab;

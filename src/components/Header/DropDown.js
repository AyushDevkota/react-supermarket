import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ data, title }) => {
	return (
		<ul className="absolute z-50 top-10 -left-10 bg-white text-orange w-48 p-4 shadow-ul border border-dropdownborder">
			<h6 className="text-xl font-bold mb-3 pb-4 border-b-2">{title}</h6>
			<div className="text-nine flex flex-col gap-3 text-sm">
				{data.map((item) => {
					return (
						<li key={item.id}>
							<Link to={item.to}>{item.title}</Link>
						</li>
					);
				})}
			</div>
		</ul>
	);
};

export default DropDown;

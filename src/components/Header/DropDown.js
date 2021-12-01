import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ data, hover }) => {
	return (
		<ul
			className={`${
				hover ? "" : "hidden"
			} absolute z-50 top-10 -left-10 bg-white text-orange w-48 p-4 shadow-ul border border-dropdownborder`}
		>
			<div className="text-nine flex flex-col gap-3 text-sm">
				{data.map((item) => {
					return (
						<li key={item.id}>
							<Link to={item.slug}>{item.title}</Link>
						</li>
					);
				})}
			</div>
		</ul>
	);
};

export default DropDown;

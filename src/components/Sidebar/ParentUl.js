import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ParentUl = (props) => {
	return (
		<li className="">
			<Link
				to="/products"
				className="flex items-center gap-2 mb-3 hover:text-btnblue"
			>
				<FaArrowRight className="inline text-orange" />
				{props.title}
			</Link>
			{props.children}
		</li>
	);
};

export default ParentUl;

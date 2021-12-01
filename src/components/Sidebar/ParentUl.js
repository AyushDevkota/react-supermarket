import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ParentUl = ({ data }) => {
	return (
		<li className="">
			<Link
				to={`/categories/${data.slug}`}
				className="flex items-center gap-2 mb-3 hover:text-btnblue uppercase"
			>
				<FaArrowRight className="inline text-orange" />
				{data.title}
			</Link>
			{data.children}
		</li>
	);
};

export default ParentUl;

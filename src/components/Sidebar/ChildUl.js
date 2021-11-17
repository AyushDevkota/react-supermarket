import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ChildUl = ({ data }) => {
	return (
		<ul className="ml-8 flex flex-col gap-3">
			{data.map((item) => {
				return (
					<li key={item.id} className="hover:text-btnblue">
						<Link to="/" className="flex items-center gap-2">
							<FaArrowRight className="inline text-orange" />
							{item.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default ChildUl;

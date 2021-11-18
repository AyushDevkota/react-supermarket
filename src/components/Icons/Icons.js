import React from "react";
import IconTitle from "./IconTitle";
import { Link } from "react-router-dom";

const Icons = ({ data, title }) => {
	return (
		<article className="py-4">
			<IconTitle title={title} />
			<div className="grid grid-cols-4 gap-y-8 gap-x-2">
				{data.map(({ id, icon, text }) => {
					return (
						<Link
							to="./"
							key={id}
							className="bg-iconbg flex items-center px-4 py-2 gap-4 hover:bg-black hover:text-white"
						>
							{icon}
							<p>{text}</p>
						</Link>
					);
				})}
			</div>
		</article>
	);
};

export default Icons;

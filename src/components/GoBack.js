import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const GoBack = ({ props }) => {
	return (
		<section className="bg-grayf5 py-6">
			<div className="container mx-auto">
				<ul className="flex items-center gap-4">
					<li className="flex items-center">
						<Link to="/" className="text-btnblue flex ">
							<AiFillHome size={25} />
							<span className="mx-4 font-bold">Home</span>
						</Link>
						<span className="text-grayccc">/</span>
					</li>
					<li className="text-darkgray">{props}</li>
				</ul>
			</div>
		</section>
	);
};

export default GoBack;

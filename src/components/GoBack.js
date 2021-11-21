import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const GoBack = ({ props }) => {
	return (
		<section className="bg-grayf5 py-5">
			<div className="md:max-w-3xl lg:max-w-4xl xl:max-w-6xl px-4 md:px-8 lg:px-0 mx-auto">
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

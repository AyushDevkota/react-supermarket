import React from "react";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Title = () => {
	return (
		<section className="flex flex-col md:flex-row text-center p-4 gap-4 md:px-8 md:justify-between md:max-w-3xl mx-auto lg:max-w-4xl lg:px-0 xl:max-w-6xl lg:p-8">
			<div className="flex justify-center gap-1 items-center text-sm md:gap-0 lg:text-base">
				<FaPhoneAlt size={12} />
				<p className="md:pl-1">Order online or call us : (+0123) 234 567</p>
			</div>

			<Link to="/">
				<h1 className="uppercase text-orange font-bold text-3xl lg:text-4xl">
					super market
				</h1>
			</Link>

			<div className="flex gap-2">
				<input
					type="search"
					name="search"
					placeholder="Search for a Product..."
					required
					className="text-base border border-grayccc px-2 py-1 w-full"
				/>
				<button type="submit" className="bg-orange px-3 rounded">
					<FaSearch color="white" />
				</button>
			</div>
		</section>
	);
};

export default Title;

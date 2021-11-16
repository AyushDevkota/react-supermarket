import React from "react";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Title = () => {
	return (
		<section className="container mx-auto flex justify-between items-center">
			<div className="flex items-center gap-3 py-12">
				<FaPhoneAlt size={12} />
				<p>Order online or call us : (+0123) 234 567</p>
			</div>

			<Link to="/">
				<h1 className="uppercase text-orange font-bold text-5xl">
					super market
				</h1>
			</Link>

			<div className="flex gap-4">
				<input
					type="search"
					name="search"
					placeholder="Search for a Product..."
					required
					className="border-2 border-grayccc p-2"
				/>
				<button type="submit" className="bg-orange p-4 rounded">
					<FaSearch color="white" />
				</button>
			</div>
		</section>
	);
};

export default Title;

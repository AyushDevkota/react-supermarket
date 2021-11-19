import React from "react";
import { Link } from "react-router-dom";

const MobileDropDown = ({ isOpen, toggleMenu }) => {
	return (
		<ul
			className={
				isOpen
					? "flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center py-4 text-white bg-orange"
					: "hidden"
			}
			onClick={toggleMenu}
		>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/groceries">Groceries</Link>
			</li>
			<li>
				<Link to="/household">Household</Link>
			</li>
			<li>
				<Link to="/personal">Personal Care</Link>
			</li>
			<li>
				<Link to="/packaged">Packaged Foods</Link>
			</li>
			<li>
				<Link to="/beverages">Beverages</Link>
			</li>
			<li>
				<Link to="/gourmet">Gourmet</Link>
			</li>
			<li>
				<Link to="/offers">Offers</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
		</ul>
	);
};

export default MobileDropDown;

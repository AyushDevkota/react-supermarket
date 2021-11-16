import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const SecondaryNavbar = () => {
	return (
		<nav className="bg-orange">
			<div className="container mx-auto">
				<ul className="flex justify-between items-center py-4 text-white">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/" className="flex items-center">
							Groceries
							<FaCaretDown size={10} />
						</Link>
					</li>
					<li>
						<Link to="/" className="flex items-center">
							Household
							<FaCaretDown size={10} />
						</Link>
					</li>
					<li>
						<Link to="/" className="flex items-center">
							Personal Care
							<FaCaretDown size={10} />
						</Link>
					</li>
					<li>
						<Link to="/" className="flex items-center">
							Packaged Foods
							<FaCaretDown size={10} />
						</Link>
					</li>
					<li>
						<Link to="/" className="flex items-center">
							Beverages
							<FaCaretDown size={10} />
						</Link>
					</li>
					<li>
						<Link to="/">Gourmet</Link>
					</li>
					<li>
						<Link to="/">Offers</Link>
					</li>
					<li>
						<Link to="/">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default SecondaryNavbar;

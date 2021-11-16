import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const PrimaryNavbar = () => {
	return (
		<nav className="bg-lightgray text-white py-4 ">
			<div className="container mx-auto flex justify-between items-center">
				<div className="">
					<p>
						SALE UP TO 70% OFF. USE CODE "SALE70%".{" "}
						<Link to="./" className="text-orange">
							SHOP NOW
						</Link>{" "}
					</p>
				</div>
				<ul className="flex gap-10 text-sm font-medium">
					<li>
						<Link to="/register">Create Account</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/contact">Help</Link>
					</li>
				</ul>
				<button>
					<FaCartArrowDown size={22} />{" "}
				</button>
			</div>
		</nav>
	);
};

export default PrimaryNavbar;

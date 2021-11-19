import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const PrimaryNavbar = () => {
	return (
		<nav className=" bg-lightgray text-white py-4 px-8 mx-auto text-center md:text-left">
			<div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
				<div className="md:w-full">
					<p className="text-tiny md:text-base">
						SALE UP TO 70% OFF. USE CODE "SALE70%".{" "}
						<Link to="/products" className="text-orange">
							SHOP NOW
						</Link>{" "}
					</p>
				</div>
				<ul className="flex justify-between md:justify-center md:gap-4 text-sm font-medium w-full">
					<li>
						<Link to="/register">Create Account</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/contact">Help</Link>
					</li>
					<button className="md:hidden">
						<FaCartArrowDown size={22} />
					</button>
				</ul>
				<button className="hidden md:block">
					<FaCartArrowDown size={22} />
				</button>
			</div>
		</nav>
	);
};

export default PrimaryNavbar;

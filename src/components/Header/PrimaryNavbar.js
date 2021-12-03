import React from "react";
import { Link } from "react-router-dom";

const PrimaryNavbar = () => {
	return (
		<nav className=" bg-lightgray text-white py-4 px-8 mx-auto text-center md:text-left lg:py-5">
			<div className="flex flex-col gap-4 md:flex-row items-center justify-between mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
				<div className="md:w-full">
					<p className="text-tiny md:text-base">
						SALE UP TO 70% OFF. USE CODE "SALE70%".{" "}
						<Link to="/categories" className="text-orange">
							SHOP NOW
						</Link>{" "}
					</p>
				</div>
				<ul className="flex justify-between text-sm font-medium gap-4 lg:w-96 lg:text-base">
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
			</div>
		</nav>
	);
};

export default PrimaryNavbar;

import React from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { Link } from "react-router-dom";

const Content = () => {
	const date = new Date();
	const currentYear = date.getFullYear();
	return (
		<article className="bg-bgContent pt-20 pb-8">
			<div className="container mx-auto">
				<div className="grid grid-cols-custom4Grid gap-12 text-textContent">
					<div className="contact">
						<h3 className="text-white uppercase mb-5 text-2xl font-semibold">
							contact
						</h3>
						<ul>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange border-2 border-orange flex p-2 justify-center items-center">
									<FiMapPin />
								</span>
								<p className="ml-2">1234k Avenue, 4th block, New York City.</p>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange border-2 border-orange flex p-2 justify-center items-center">
									<BsEnvelope />
								</span>
								<a
									href="mailto:info@example.com"
									className="hover:text-orange ml-2"
								>
									info@example.com
								</a>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange border-2 border-orange flex p-2 justify-center items-center">
									<FaPhoneAlt />
								</span>
								<p className="ml-2">+1234 567 567</p>
							</li>
						</ul>
					</div>

					<div className="information">
						<h3 className="text-white uppercase mb-5 text-2xl font-semibold">
							information
						</h3>
						<ul>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									About Us
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									Contact
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									Short Codes
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									FAQ's
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									Special Products
								</Link>
							</li>
						</ul>
					</div>

					<div className="category">
						<h3 className="text-white uppercase mb-5 text-2xl font-semibold">
							category
						</h3>
						<ul>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									Groceries
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									Household
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									Personal Care
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									Packaged Foods
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									Beverages
								</Link>
							</li>
						</ul>
					</div>

					<div className="profile">
						<h3 className="text-white uppercase mb-5 text-2xl font-semibold">
							profile
						</h3>
						<ul>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									Store
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									My Cart
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									Login
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="./" className="ml-2">
									Create Account
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="pt-12 text-center text-nine">
					&copy; {currentYear} Super Market. All rights reserved | Design by{" "}
					<a
						href="https://github.com/AyushDevkota"
						rel="noreferrer"
						target="_blank"
						className="text-orange font-bold hover:text-nine"
					>
						Ayush Devkota
					</a>
				</div>
			</div>
		</article>
	);
};

export default Content;

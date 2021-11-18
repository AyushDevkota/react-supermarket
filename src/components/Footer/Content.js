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
								<a
									href="https://www.google.com/maps/place/New+York,+NY,+USA/@40.6976701,-74.2598651,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728"
									target="_blank"
									rel="noreferrer"
									className="hover:text-orange ml-2"
								>
									1234k Avenue, 4th block, New York City.
								</a>
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
								<a href="tel:1234 567 567" className="ml-2 hover:text-orange">
									+1234 567 567
								</a>
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
								<Link to="/about" className="ml-2 hover:text-orange">
									About Us
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/contact" className="ml-2 hover:text-orange">
									Contact
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/codes" className="ml-2 hover:text-orange">
									Short Codes
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/faq" className="ml-2 hover:text-orange">
									FAQ's
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/products" className="ml-2 hover:text-orange">
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
								<Link to="/groceries" className="ml-2 hover:text-orange">
									Groceries
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/household" className="ml-2 hover:text-orange">
									Household
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/personal" className="ml-2 hover:text-orange">
									Personal Care
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/packaged" className="ml-2 hover:text-orange">
									Packaged Foods
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/beverages" className="ml-2 hover:text-orange">
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
								<Link to="/products" className="ml-2 hover:text-orange">
									Store
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/checkout" className="ml-2 hover:text-orange">
									My Cart
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/login" className="ml-2 hover:text-orange">
									Login
								</Link>
							</li>
							<li className="flex items-center text-sm py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/register" className="ml-2 hover:text-orange">
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

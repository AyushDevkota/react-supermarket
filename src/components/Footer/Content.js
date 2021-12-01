import React, { useContext } from "react";
import { modalContext } from "../../App";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { Link } from "react-router-dom";

const Content = () => {
	const { categories } = useContext(modalContext);
	const date = new Date();
	const currentYear = date.getFullYear();
	return (
		<article className="bg-bgContent px-3 pt-8 pb-4">
			<div className="md:px-8 md:max-w-3xl mx-auto lg:max-w-4xl lg:px-0 xl:max-w-6xl">
				<div className="grid gap-8 text-textContent md:grid-cols-2 lg:grid-cols-4 lg:py-8">
					<div>
						<h3 className="text-white uppercase mb-2 text-xl font-semibold md:mb-6 md:text-2xl">
							contact
						</h3>
						<ul className="lg:space-y-2 text-xs md:text-sm">
							<li className="flex items-center py-1 font-medium">
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
							<li className="flex items-center py-1 font-medium">
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
							<li className="flex items-center py-1 font-medium">
								<span className="text-orange border-2 border-orange flex p-2 justify-center items-center">
									<FaPhoneAlt />
								</span>
								<a href="tel:1234 567 567" className="ml-2 hover:text-orange">
									+1234 567 567
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-white uppercase mb-2 text-xl font-semibold md:mb-6 md:text-2xl">
							information
						</h3>
						<ul className="lg:space-y-2 text-xs md:text-sm">
							<li className="flex items-center  py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/about" className="ml-2 hover:text-orange">
									About Us
								</Link>
							</li>
							<li className="flex items-center  py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/contact" className="ml-2 hover:text-orange">
									Contact
								</Link>
							</li>
							<li className="flex items-center  py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/codes" className="ml-2 hover:text-orange">
									Short Codes
								</Link>
							</li>
							<li className="flex items-center  py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/faq" className="ml-2 hover:text-orange">
									FAQ's
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-white uppercase mb-2 text-xl font-semibold md:mb-6 md:text-2xl">
							category
						</h3>
						<ul className="lg:space-y-2 text-xs md:text-sm">
							{categories.map((category) => {
								return (
									<li
										className="flex items-center  py-1 font-medium"
										key={category.id}
									>
										<span className="text-orange">
											<FaArrowRight />
										</span>
										<Link
											to={`/categories/${category.slug}`}
											className="ml-2 hover:text-orange uppercase"
										>
											{category.title}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>

					<div>
						<h3 className="text-white uppercase mb-2 text-xl font-semibold md:mb-6 md:text-2xl">
							profile
						</h3>
						<ul className="lg:space-y-2 text-xs md:text-sm">
							<li className="flex items-center py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/products" className="ml-2 hover:text-orange">
									Store
								</Link>
							</li>
							<li className="flex items-center py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/checkout" className="ml-2 hover:text-orange">
									My Cart
								</Link>
							</li>
							<li className="flex items-center py-1 font-medium">
								<span className="text-orange">
									<FaArrowRight />
								</span>
								<Link to="/login" className="ml-2 hover:text-orange">
									Login
								</Link>
							</li>
							<li className="flex items-center py-1 font-medium">
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

				<div className="pt-7 text-center text-nine text-sm md:text-base md:pt-8">
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

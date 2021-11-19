import React from "react";
import { Link } from "react-router-dom";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const BrandStore = () => {
	return (
		<section className="bg-bgBrand py-8 md:px-8 md:pb-16">
			<div className="px-4 md:max-w-3xl lg:max-w-4xl lg:px-0 mx-auto xl:max-w-6xl">
				<h3 className="sm-sub-title md:text-3xl md:pt-8">Brand Store</h3>
				<div className="sm-underline md:underline md:mb-8"></div>
				<div className="pt-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-y-6 md:gap-x-8">
					{data.map((item) => {
						return (
							<div
								className="bg-white text-center uppercase font-medium py-5 hover:shadow-lg"
								key={item}
							>
								<Link to="./" className="text-btnblue">
									lorem
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default BrandStore;

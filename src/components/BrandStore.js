import React from "react";
import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const BrandStore = () => {
	return (
		<section className="bg-bgBrand py-8 md:px-8 md:pb-16 lg:pb-16">
			<div className="px-4 md:max-w-3xl mx-auto lg:max-w-4xl lg:px-0 xl:max-w-6xl">
				<PageTitle title="brand store" />
				<div className="pt-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-y-6 md:gap-x-8 lg:grid-cols-6">
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

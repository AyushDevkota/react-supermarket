import React from "react";
import { Link } from "react-router-dom";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const BrandStore = () => {
	return (
		<section className="bg-bgBrand py-12">
			<div className="container mx-auto">
				<h3 className="sub-title">Brand Store</h3>
				<div className="underline"></div>
				<div className="grid grid-cols-customGrid gap-y-4 gap-x-8">
					{data.map((item) => {
						return (
							<div
								className="bg-white text-center uppercase font-medium py-5 hover:shadow-lg"
								key={item}
							>
								<Link to="./">lorem</Link>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default BrandStore;

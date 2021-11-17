import React, { useState } from "react";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";

const TopOffers = ({ title }) => {
	const [activeTab, setActiveTab] = useState(true);
	const changeActive = () => setActiveTab(!activeTab);
	return (
		<section className="bg-grayf5 py-20">
			<div className="container mx-auto">
				<h2 className="sub-title">Top Selling Offers</h2>
				<div className="underline"></div>
				<article className="border-2 border-grayborder">
					<ul className="flex items-center">
						<li
							className={` w-1/2 py-1.5 font-bold uppercase text-2xl hover:bg-orange cursor-pointer text-center ${
								activeTab === true ? "bg-orange text-white" : "text-skyblue"
							}`}
							onClick={changeActive}
						>
							{title[0]}
						</li>
						<li
							className={` w-1/2 py-1.5 font-bold uppercase text-2xl hover:bg-orange cursor-pointer text-center ${
								activeTab === false ? "bg-orange text-white" : "text-skyblue"
							}`}
							onClick={changeActive}
						>
							{title[1]}
						</li>
					</ul>
					<div className="w-11/12 mx-auto my-8">
						{activeTab === true ? (
							<FirstTab title={title[0]} />
						) : (
							<SecondTab title={title[1]} />
						)}
					</div>
				</article>
			</div>
		</section>
	);
};

export default TopOffers;

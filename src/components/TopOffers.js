import React, { useState } from "react";
import PageTitle from "./PageTitle";
import FirstTab from "./FirstTab";
import SecondTab from "./SecondTab";

const TopOffers = ({ title }) => {
	const [activeTab, setActiveTab] = useState(0);
	const changeActive = (index) => {
		if (activeTab === index) return;
		setActiveTab(index);
	};
	return (
		<section className="bg-grayf5 py-8">
			<div className="px-4 md:px-8 md:max-w-3xl mx-auto lg:max-w-4xl lg:px-0 xl:max-w-6xl lg:py-8">
				<PageTitle title="Top Selling Offers" />
				<article className="border-2 border-grayborder lg:pb-8">
					<ul className="flex items-center">
						<li
							className={` w-1/2 py-1.5 font-bold uppercase text-xs cursor-pointer text-center md:py-3 md:text-xl ${
								activeTab === 0 ? "bg-orange text-white" : "text-skyblue"
							}`}
							onClick={() => changeActive(0)}
						>
							{title[0]}
						</li>
						<li
							className={` w-1/2 py-1.5 font-bold uppercase text-xs cursor-pointer text-center md:py-3 md:text-xl ${
								activeTab === 1 ? "bg-orange text-white" : "text-skyblue"
							}`}
							onClick={() => changeActive(1)}
						>
							{title[1]}
						</li>
					</ul>
					<div className="py-3 px-4">
						{activeTab === 0 ? (
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

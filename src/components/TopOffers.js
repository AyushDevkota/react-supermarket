import React, { useState } from "react";
import FirstTab from "./AdvertisedOffers";
import SecondTab from "./TodayOffers";

const TopOffers = () => {
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
							className={`text-skyblue w-1/2 py-1.5 uppercase text-2xl hover:bg-orange cursor-pointer text-center ${
								activeTab === true ? "bg-orange text-white" : ""
							}`}
							onClick={changeActive}
						>
							Advertised Offers
						</li>
						<li
							className={`text-skyblue w-1/2 py-1.5 uppercase text-2xl hover:bg-orange cursor-pointer text-center ${
								activeTab === false ? "bg-orange text-white" : ""
							}`}
							onClick={changeActive}
						>
							Todays Offers
						</li>
					</ul>
					<div className="w-11/12 mx-auto my-8">
						{activeTab === true ? <FirstTab /> : <SecondTab />}
					</div>
				</article>
			</div>
		</section>
	);
};

export default TopOffers;

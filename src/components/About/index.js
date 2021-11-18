import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import ImageSection from "./ImageSection";
import Team from "./Team";

const index = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto">
				<h2 className="sub-title">About us</h2>
				<div className="underline"></div>
				<div className="flex justify-between">
					<LeftContent />
					<RightContent />
				</div>
			</div>
			<ImageSection />
			<Team />
		</section>
	);
};

export default index;

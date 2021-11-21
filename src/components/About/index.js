import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import ImageSection from "./ImageSection";
import PageTitle from "../PageTitle";
import Team from "./Team";

const index = () => {
	return (
		<section className="py-8 lg:py-0">
			<div className="px-4 mx-auto md:max-w-3xl md:px-8 lg:max-w-4xl lg:px-0 xl:max-w-6xl lg:py-8">
				<PageTitle title="about us" />
				<div className="flex flex-col md:gap-8 lg:flex-row">
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

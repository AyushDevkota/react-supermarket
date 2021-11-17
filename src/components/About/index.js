import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const index = () => {
	return (
		<section className="container mx-auto py-20">
			<h2 className="sub-title">About us</h2>
			<div className="underline"></div>
			<div className="flex justify-between">
				<LeftContent />
				<RightContent />
			</div>
		</section>
	);
};

export default index;

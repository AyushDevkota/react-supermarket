import React from "react";

const PageTitle = ({ title }) => {
	return (
		<>
			<h2 className="sm-sub-title md:text-3xl lg:text-4xl md:pt-8">{title}</h2>
			<div className="sm-underline md:mb-8 lg:mb-12 lg:mt-5"></div>
		</>
	);
};

export default PageTitle;

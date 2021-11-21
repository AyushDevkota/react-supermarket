import React from "react";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar/index";

const PaginationItems = ({ props }) => {
	return (
		<section className="py-10 mx-auto flex flex-col gap-8 px-4 md:max-w-3xl md:px-8 lg:max-w-4xl lg:px-0 lg:flex-row lg:pb-16 lg:pt-24 xl:max-w-6xl justify-between">
			<Sidebar />
			<Pagination props={props} />
		</section>
	);
};

export default PaginationItems;

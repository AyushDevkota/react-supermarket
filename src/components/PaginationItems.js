import React from "react";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar/index";

const PaginationItems = ({ props }) => {
	return (
		<section className="py-10 container mx-auto flex justify-between">
			<Sidebar />
			<Pagination props={props} />
		</section>
	);
};

export default PaginationItems;

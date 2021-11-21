import React from "react";
import Item from "./Item";
import PageNumber from "./Sidebar/PageNumber";

const Pagination = ({ props }) => {
	return (
		<aside className="flex flex-col gap-6 md:w-full mx-auto lg:gap-12">
			<div className="flex justify-between gap-2 text-sm md:justify-end lg:text-base lg:gap-8">
				<select
					name="page"
					className="border border-textForm py-1 pl-1 w-1/2 md:w-36 lg:py-2 lg:w-40"
				>
					<option value="9">Item on page 9</option>
					<option value="18">Item on page 18</option>
					<option value="32">Item on page 32</option>
					<option value="All">Item on page All</option>
				</select>
				<select
					name="page"
					className="border border-textForm py-1 pl-1 w-1/2 md:w-52 lg:w-56"
				>
					<option value="default">Default Sorting</option>
					<option value="popularity">Sort by popularity</option>
					<option value="average rating">Sort by average rating</option>
					<option value="price">Sort by price</option>
				</select>
			</div>
			<div className="mb-8 grid text-center gap-y-2 md:grid-cols-3 md:gap-y-8">
				{props.map((item) => {
					return <Item key={item.id} {...item} />;
				})}
			</div>
			<PageNumber />
		</aside>
	);
};

export default Pagination;

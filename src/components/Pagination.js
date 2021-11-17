import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

const Pagination = ({ props }) => {
	return (
		<aside className="flex flex-col gap-12 w-2/3">
			<div className="flex gap-24 justify-end">
				<select name="page" className="border border-textForm pl-4 pr-8 py-1">
					<option value="9">Item on page 9</option>
					<option value="18">Item on page 18</option>
					<option value="32">Item on page 32</option>
					<option value="All">Item on page All</option>
				</select>
				<select name="page" className="border border-textForm pl-4 pr-16 py-1">
					<option value="default">Default Sorting</option>
					<option value="popularity">Sort by popularity</option>
					<option value="average rating">Sort by average rating</option>
					<option value="price">Sort by price</option>
				</select>
			</div>
			<div className="mb-8 grid grid-cols-3 place-items-center text-center gap-x-0 gap-y-8">
				{props.map((item) => {
					return <Item key={item.id} {...item} />;
				})}
			</div>
			<nav className="flex justify-end">
				<Link
					to="/"
					className="border border-paginationborder py-1.5 px-3 hover:text-paghovercolor hover:bg-paghoverbg"
				>
					&lt;
				</Link>
				<Link
					to="/"
					className="border border-paginationborder py-1.5 px-3 active hover:text-paghovercolor hover:bg-paghoverbg"
				>
					1
				</Link>
				<Link
					to="/"
					className="border border-paginationborder py-1.5 px-3 hover:text-paghovercolor hover:bg-paghoverbg"
				>
					2
				</Link>
				<Link
					to="/"
					className="border border-paginationborder py-1.5 px-3 hover:text-paghovercolor hover:bg-paghoverbg"
				>
					3
				</Link>
				<Link
					to="/"
					className="border border-paginationborder py-1.5 px-3 hover:text-paghovercolor hover:bg-paghoverbg"
				>
					4
				</Link>
				<Link
					to="/"
					className="border border-paginationborder py-1.5 px-3 hover:text-paghovercolor hover:bg-paghoverbg"
				>
					&gt;
				</Link>
			</nav>
		</aside>
	);
};

export default Pagination;

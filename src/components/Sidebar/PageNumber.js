import React from "react";
import { Link } from "react-router-dom";

const PageNumber = () => {
	return (
		<nav className="flex justify-end">
			<Link
				to="./"
				className="border border-paginationborder py-1.5 px-3 hover:text-paghovercolor hover:bg-paghoverbg"
			>
				&lt;
			</Link>
			<Link
				to="./"
				className="border border-paginationborder py-1.5 px-3 active hover:text-paghovercolor hover:bg-paghoverbg"
			>
				1
			</Link>
			<Link
				to="./"
				className="border border-paginationborder py-1.5 px-3 hover:text-paghovercolor hover:bg-paghoverbg"
			>
				2
			</Link>
			<Link
				to="./"
				className="border border-paginationborder py-1.5 px-3 hover:text-paghovercolor hover:bg-paghoverbg"
			>
				3
			</Link>
			<Link
				to="./"
				className="border border-paginationborder py-1.5 px-3 hover:text-paghovercolor hover:bg-paghoverbg"
			>
				4
			</Link>
			<Link
				to="./"
				className="border border-paginationborder py-1.5 px-3 hover:text-paghovercolor hover:bg-paghoverbg"
			>
				&gt;
			</Link>
		</nav>
	);
};

export default PageNumber;

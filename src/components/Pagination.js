import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import PageNumber from "./Sidebar/PageNumber";
import { modalContext } from "../App";

const Pagination = () => {
	const [categories, setCategories] = useState([]);
	const { slug } = useParams();
	useEffect(() => {
		fetchData();
	}, []);

	const { base_url, api_key, isLoading, error } = useContext(modalContext);

	const fetchData = async () => {
		const response = await fetch(`${base_url}/api/v4/product`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Api-key": api_key,
				"Warehouse-Id": 1,
			},
		});
		const data = await response.json();
		setCategories(data.data);
	};
	let content = <p></p>;
	if (categories.length > 0) {
		content = (
			<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
				{categories
					.filter((category) => category.categorySlug === slug)
					.map((filteredCategory) => (
						<Item
							data={filteredCategory}
							key={filteredCategory.id}
							loading="eager"
						/>
					))}
			</div>
		);
	}
	if (error) {
		content = <p>{error}</p>;
	}
	if (isLoading) {
		content = <p></p>;
	}
	return (
		<aside className="flex flex-col gap-6 md:w-full mx-auto lg:gap-12">
			{content}
			<PageNumber />
		</aside>
	);
};

export default Pagination;

import React, { useContext } from "react";
import PageTitle from "./PageTitle";
import CategoryItem from "./CategoryItem";
import { modalContext } from "../App";

const Categories = () => {
	const { homeData, isLoading, error } = useContext(modalContext);
	let content;
	if (Object.keys(homeData).length > 0) {
		content = homeData.data[1].categories.map((item) => (
			<CategoryItem key={item.id} data={item} />
		));
	}
	if (error) {
		content = <p>{error}</p>;
	}
	if (isLoading) {
		content = <p></p>;
	}
	return (
		<section className="py-8 px-4 md:px-8 md:pb-16 md:max-w-3xl lg:max-w-4xl lg:px-0 mx-auto xl:max-w-6xl">
			<PageTitle title="Shop by categories" />
			<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{content}</div>
		</section>
	);
};

export default Categories;

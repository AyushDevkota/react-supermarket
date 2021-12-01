import React, { useContext } from "react";
import PageTitle from "./PageTitle";
import Item from "./Item";
import { modalContext } from "../App";

const NewDishes = () => {
	const { homeData, isLoading, error } = useContext(modalContext);

	let content = <p></p>;
	if (Object.keys(homeData).length > 0) {
		content = (
			<>
				<PageTitle title={homeData.data[2].sectionDetails.title} />
				<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
					{homeData.data[2].sectionDetails.products.map((item) => (
						<Item data={item} key={item.id} />
					))}
				</div>
			</>
		);
	}
	if (error) {
		content = <p>{error}</p>;
	}
	if (isLoading) {
		content = <p></p>;
	}
	return (
		<section className="px-4 py-8 md:px-8 md:pb-16 md:max-w-3xl lg:max-w-4xl lg:px-0 mx-auto xl:max-w-6xl">
			{content}
		</section>
	);
};

export default NewDishes;

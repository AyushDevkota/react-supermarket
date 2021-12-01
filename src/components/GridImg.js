import React, { useContext } from "react";
import { modalContext } from "../App";

const GridImg = () => {
	const { homeData, isLoading, error } = useContext(modalContext);
	let content = <p></p>;
	if (Object.keys(homeData).length > 0) {
		content = (
			<>
				<img
					src={homeData.data[5].details[0].images}
					alt={homeData.data[5].details[0].title}
					className="md:w-1/2 transform hover:scale-110 duration-1000 ease w-full"
				/>
				<img
					src={homeData.data[5].details[1].images}
					alt={homeData.data[5].details[1].title}
					className="md:w-1/2 transform hover:scale-110 duration-1000 ease w-full"
				/>
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
		<section className="py-8 px-8">
			<div className="flex flex-col gap-3 md:max-w-3xl lg:max-w-4xl lg:gap-6 md:flex-row mx-auto xl:max-w-6xl overflow-hidden">
				{content}
			</div>
		</section>
	);
};

export default GridImg;

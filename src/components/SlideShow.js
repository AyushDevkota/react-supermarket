import React, { useContext } from "react";
import { modalContext } from "../App";
import Slides from "./Slides";

const SlideShow = () => {
	const { homeData, isLoading, error } = useContext(modalContext);

	let content = <p></p>;
	if (Object.keys(homeData).length > 0) {
		content = <Slides homeData={homeData.data[0].details} />;
	}
	if (error) {
		content = <p>{error}</p>;
	}
	if (isLoading) {
		content = <p></p>;
	}

	return <>{content}</>;
};

export default SlideShow;

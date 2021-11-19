import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import SingleProduct from "../components/SingleProduct";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import useDocumentTitle from "../useDocumentTitle";
import { data } from "../Data/SinglePageData";

const Single = () => {
	useDocumentTitle("Supermarket | Single");
	return (
		<>
			<Header />
			<GoBack props={"Single Page"} />
			<SingleProduct {...data} />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Single;

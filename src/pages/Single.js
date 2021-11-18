import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import PaginationItems from "../components/PaginationItems";
import useDocumentTitle from "../useDocumentTitle";
import { packagedData } from "../Data/PaginationData";

const Single = () => {
	useDocumentTitle("Supermarket | Single");
	return (
		<>
			<Header />
			<GoBack props={"Single Page"} />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Single;

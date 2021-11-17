import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import PaginationItems from "../components/PaginationItems";
import useDocumentTitle from "../useDocumentTitle";
import { beveragesData } from "../Data/PaginationData";

const Beverages = () => {
	useDocumentTitle("Supermarket | Beverages");
	return (
		<>
			<Header />
			<GoBack props={"Beverages"} />
			<PaginationItems props={beveragesData} />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Beverages;

import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import PaginationItems from "../components/PaginationItems";
import useDocumentTitle from "../useDocumentTitle";
import { groceryData } from "../Data/PaginationData";

const Groceries = () => {
	useDocumentTitle("Supermarket | Groceries");
	return (
		<>
			<Header />
			<GoBack props={"Groceries"} />
			<PaginationItems props={groceryData} />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Groceries;

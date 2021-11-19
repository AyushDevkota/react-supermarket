import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import PaginationItems from "../components/PaginationItems";
import useDocumentTitle from "../useDocumentTitle";
import { householdData } from "../Data/PaginationData";
import AddToCart from "../components/AddToCart";

const Household = () => {
	useDocumentTitle("Supermarket | Household");
	return (
		<>
			<AddToCart />
			<Header />
			<GoBack props={"Household"} />
			<PaginationItems props={householdData} />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Household;

import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import PaginationItems from "../components/PaginationItems";
import useDocumentTitle from "../useDocumentTitle";
import AddToCart from "../components/AddToCart";
import { packagedData } from "../Data/PaginationData";

const PackagedFoods = () => {
	useDocumentTitle("Supermarket | Packaged Foods");
	return (
		<>
			<AddToCart />
			<Header />
			<GoBack props={"Packaged Foods"} />
			<PaginationItems props={packagedData} />
			<Footer />
			<GoToTop />
		</>
	);
};

export default PackagedFoods;

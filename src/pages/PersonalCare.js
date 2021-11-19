import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import PaginationItems from "../components/PaginationItems";
import useDocumentTitle from "../useDocumentTitle";
import AddToCart from "../components/AddToCart";
import { personalData } from "../Data/PaginationData";

const PersonalCare = () => {
	useDocumentTitle("Supermarket | Personal Care");
	return (
		<>
			<AddToCart />
			<Header />
			<GoBack props={"Personal Care"} />
			<PaginationItems props={personalData} />
			<Footer />
			<GoToTop />
		</>
	);
};

export default PersonalCare;

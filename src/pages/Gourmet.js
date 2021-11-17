import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import PaginationItems from "../components/PaginationItems";
import useDocumentTitle from "../useDocumentTitle";
import { personalData } from "../Data/PaginationData";

const Gourmet = () => {
	useDocumentTitle("Supermarket | Gourmet");
	return (
		<>
			<Header />
			<GoBack props={"Gourmet"} />
			<PaginationItems props={personalData} />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Gourmet;
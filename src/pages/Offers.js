import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import TopOffers from "../components/TopOffers";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import useDocumentTitle from "../useDocumentTitle";

const Offers = () => {
	useDocumentTitle("Supermarket | Offers");
	return (
		<>
			<Header />
			<GoBack props={"Offers"} />
			<TopOffers title={["all products", "daily offers"]} />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Offers;

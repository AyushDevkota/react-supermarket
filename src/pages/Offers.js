import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import useDocumentTitle from "../useDocumentTitle";
import AddToCart from "../components/AddToCart";

const Offers = () => {
	useDocumentTitle("Supermarket | Offers");
	return (
		<>
			<AddToCart />
			<Header />
			<GoBack props={"Offers"} />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Offers;

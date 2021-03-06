import React from "react";
import Header from "../components/Header/Index";
import AddToCart from "../components/AddToCart";
import GoBack from "../components/GoBack";
import Table from "../components/Table";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import useDocumentTitle from "../useDocumentTitle";

const Checkout = () => {
	useDocumentTitle("Supermarket | Checkout");
	return (
		<>
			<AddToCart />
			<Header />
			<GoBack props={"Checkout"} />
			<Table />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Checkout;

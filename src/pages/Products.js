import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import PaginationItems from "../components/PaginationItems";
import useDocumentTitle from "../useDocumentTitle";
import AddToCart from "../components/AddToCart";

const Products = () => {
	useDocumentTitle("Supermarket | Products");
	return (
		<>
			<AddToCart />
			<Header />
			<GoBack props={"Products"} />
			<PaginationItems />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Products;

import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import useDocumentTitle from "../useDocumentTitle";
import AddToCart from "../components/AddToCart";
import SingleProduct from "../components/SingleProduct";

const DetailProduct = () => {
	useDocumentTitle("Supermarket | Products");
	return (
		<>
			<AddToCart />
			<Header />
			<GoBack props={"Products"} />
			<SingleProduct />
			<Footer />
			<GoToTop />
		</>
	);
};

export default DetailProduct;

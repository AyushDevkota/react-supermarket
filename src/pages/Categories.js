import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import CategoriesComponent from "../components/Categories";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import useDocumentTitle from "../useDocumentTitle";

const Categories = () => {
	useDocumentTitle("Supermarket | Categories");
	return (
		<>
			<Header />
			<GoBack props={"Categories"} />
			<CategoriesComponent />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Categories;

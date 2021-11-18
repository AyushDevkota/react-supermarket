import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import useDocumentTitle from "../useDocumentTitle";
import Code from "../components/Icons/Code";

const Codes = () => {
	useDocumentTitle("Supermarket | Codes");
	return (
		<>
			<Header />
			<GoBack props={"Short Codes"} />
			<Code />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Codes;

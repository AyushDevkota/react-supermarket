import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Question from "../components/Question";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import useDocumentTitle from "../useDocumentTitle";

const Faq = () => {
	useDocumentTitle("Supermarket | FAQ");
	return (
		<>
			<Header />
			<GoBack props={"FAQ"} />
			<Question />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Faq;

import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Content from "../components/About/index";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import useDocumentTitle from "../useDocumentTitle";

const About = () => {
	useDocumentTitle("Supermarket | About");
	return (
		<>
			<Header />
			<GoBack props={"About"} />
			<Content />
			<Footer />
			<GoToTop />
		</>
	);
};

export default About;

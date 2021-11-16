import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import Contact from "../components/Contact";

const Help = () => {
	return (
		<>
			<Header />
			<GoBack props={"Contact"} />
			<Contact />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Help;

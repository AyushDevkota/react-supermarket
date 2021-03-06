import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import Form from "../components/Form";
import useDocumentTitle from "../useDocumentTitle";

const CreateAccount = () => {
	useDocumentTitle("Supermarket | Create Account");
	return (
		<>
			<Header />
			<GoBack props={"Register Page"} />
			<Form />
			<Footer />
			<GoToTop />
		</>
	);
};

export default CreateAccount;

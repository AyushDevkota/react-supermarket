import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import useDocumentTitle from "../useDocumentTitle";
import ResetPassword from "../components/ResetPassword";

const ForgotPassword = () => {
	useDocumentTitle("Supermarket | Forgot Password");
	return (
		<>
			<Header />
			<GoBack props={"Forgot Password"} />
			<ResetPassword />
			<Footer />
			<GoToTop />
		</>
	);
};

export default ForgotPassword;

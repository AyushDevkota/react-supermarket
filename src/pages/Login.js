import React from "react";
import Header from "../components/Header/Index";
import GoBack from "../components/GoBack";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import LoginForm from "../components/LoginForm";

const Login = () => {
	return (
		<>
			<Header />
			<GoBack props={"Login Page"} />
			<LoginForm />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Login;

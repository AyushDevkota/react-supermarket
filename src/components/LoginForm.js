import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import PageTitle from "./PageTitle";

const LoginForm = () => {
	return (
		<section className="px-4 mx-auto py-8 lg:pb-16 lg:max-w-4xl lg:px-0 xl:max-w-6xl lg:py-8">
			<PageTitle title="login form" />
			<form className="w-full mx-auto bg-bgForm p-5 md:w-3/5 md:p-10 lg:w-1/2 xl:w-1/3">
				<input
					type="text"
					name="loginForm"
					placeholder="Email Address"
					className="input-form"
				/>
				<input
					type="password"
					name="loginForm"
					placeholder="Password"
					className="input-form"
				/>
				<Link to="/" className="font-medium hover:text-pswd">
					Forgot Password?
				</Link>
				<button className="w-full bg-btnblue text-white mt-6 py-3 hover:bg-orange lg:text-lg">
					Login
				</button>
			</form>
			<div className="text-center pt-8">
				<h3 className="text-xl font-bold uppercase lg:text-2xl">
					For new people
				</h3>
				<div className="flex justify-center gap-2 pt-4 items-end">
					<Link
						to="/register"
						className="text-orange font-bold hover:text-textForm text-sm md:text-base"
					>
						Register Here
					</Link>
					<span className=" text-nine text-sm">(Or) go back to</span>
					<Link
						to="/"
						className="text-orange  font-bold hover:text-textForm text-sm md:text-base"
					>
						Home <AiOutlineRight className="inline" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LoginForm;

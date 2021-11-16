import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const LoginForm = () => {
	return (
		<section className="py-20 container mx-auto">
			<div className="sub-title">login form</div>
			<div className="underline"></div>
			<form className="w-2/5 mx-auto bg-bgForm p-12">
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
				<button className="w-full bg-btnblue text-white mt-6 py-3 hover:bg-orange">
					Login
				</button>
			</form>
			<div className="text-center pt-8">
				<h3 className="text-3xl font-semibold uppercase">For new people</h3>
				<div className="flex justify-center gap-4 pt-4 items-end">
					<Link
						to="/register"
						className="text-orange font-bold hover:text-textForm text-xl"
					>
						Register Here
					</Link>
					<span className=" text-nine text-sm">(Or) go back to</span>
					<Link
						to="/"
						className="text-orange  font-bold hover:text-textForm text-xl"
					>
						Home <AiOutlineRight className="inline" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LoginForm;

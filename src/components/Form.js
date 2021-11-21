import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "./PageTitle";

const Form = () => {
	return (
		<section className="py-8 px-4 mx-auto lg:pb-16 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-6xl">
			<PageTitle title="register here" />
			<form className="w-full mx-auto bg-bgForm p-5 md:w-3/5 md:p-10 lg:w-1/2 xl:w-2/5">
				<h3 className="text-base uppercase text-textForm font-bold mb-4">
					Profile information
				</h3>
				<input
					type="text"
					name="firstName"
					placeholder="First Name..."
					required
					className="input-form"
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Last Name..."
					required
					className="input-form"
				/>
				<div className="flex justify-start items-center gap-1 text-sm text-nine my-2 md:gap-4 md:text-base">
					<input
						type="checkbox"
						name="newsletter"
						id="newsletter"
						required
						className="cursor-pointer form-checkbox h-6 w-6"
					/>
					<label htmlFor="newsletter" className="cursor-pointer">
						Subscribe to Newsletter
					</label>
				</div>
				<h3 className="text-base uppercase text-textForm font-bold my-8">
					login information
				</h3>
				<input
					type="email"
					name="email"
					placeholder="Email Address"
					required
					className="input-form"
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					required
					className="input-form"
				/>
				<input
					type="password"
					name="password"
					placeholder="Password Confirmation"
					required
					className="input-form"
				/>
				<div className="flex justify-start items-center gap-1 text-sm text-nine my-2 md:gap-4 md:text-base">
					<input
						type="checkbox"
						name="register"
						id="register"
						required
						className="cursor-pointer form-checkbox h-6 w-6"
					/>
					<label htmlFor="register" className="cursor-pointer">
						I accept the terms and conditions{" "}
					</label>
				</div>
				<button className="w-full bg-btnblue text-white mt-6 py-2 hover:bg-orange">
					Register
				</button>
			</form>
			<button className="block mt-6 mx-auto bg-btnForm hover:bg-orange text-white py-2 px-12 font-bold lg:mt-12">
				<Link to="/">Home</Link>
			</button>
		</section>
	);
};

export default Form;

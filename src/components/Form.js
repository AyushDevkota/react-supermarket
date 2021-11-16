import React from "react";
import { Link } from "react-router-dom";

const Form = () => {
	return (
		<section className="container py-20 mx-auto">
			<h3 className="sub-title">Register here</h3>
			<div className="underline"></div>
			<form className="w-2/5 mx-auto bg-bgForm p-12">
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
				<div className="flex justify-start items-center gap-4 text-sm text-nine my-2">
					<input
						type="checkbox"
						name="newsletter"
						id="newsletter"
						required
						className="cursor-pointer"
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
				<div className="flex justify-start items-center gap-4 text-sm text-nine my-2">
					<input
						type="checkbox"
						name="register"
						id="register"
						required
						className="cursor-pointer"
					/>
					<label htmlFor="register" className="cursor-pointer">
						I accept the terms and conditions{" "}
					</label>
				</div>
				<button className="w-full bg-btnblue text-white mt-6 py-3 hover:bg-orange">
					Register
				</button>
			</form>
			<button className="block my-8 mx-auto bg-btnForm hover:bg-orange text-white py-2 px-12 font-bold">
				<Link to="/">Home</Link>
			</button>
		</section>
	);
};

export default Form;

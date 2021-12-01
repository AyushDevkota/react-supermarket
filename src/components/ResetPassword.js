import React, { useState, useContext } from "react";
import PageTitle from "./PageTitle";
import { modalContext } from "../App";

const ResetPassword = () => {
	const { base_url, auth } = useContext(modalContext);
	const [email, setEmail] = useState("");
	const emailChangeHandler = (e) => setEmail(e.target.value);
	const changePassword = async (emailData) => {
		const requestOptions = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(emailData),
		};
		const res = await fetch(
			`${base_url}/${auth}/forgot-password`,
			requestOptions
		);
		const data = await res.json();
		console.log(data);
	};
	const formHandler = (e) => {
		e.preventDefault();
		changePassword({
			email: email,
		});
	};
	return (
		<section className="px-4 mx-auto py-8 lg:pb-16 lg:max-w-4xl lg:px-0 xl:max-w-6xl lg:py-8">
			<PageTitle title="Forgot Password" />
			<form
				className="w-full mx-auto bg-bgForm p-5 md:w-3/5 md:p-10 lg:w-1/2 xl:w-1/3"
				onSubmit={formHandler}
			>
				<input
					type="email"
					className="input-form"
					placeholder="email"
					required
					value={email}
					onChange={emailChangeHandler}
				/>
				{/* <input
					type="password"
					className="input-form"
					placeholder="Old Password"
					required
					value={oldPassword}
					onChange={oldPasswordChangeHandler}
				/>
				<input
					type="password"
					className="input-form"
					placeholder="New Password"
					required
					value={newPassword}
					onChange={newPasswordChangeHandler}
				/>
				<input
					type="password"
					className="input-form"
					placeholder="Re-Enter New Password"
					required
					value={confirmNewPassword}
					onChange={confirmNewPasswordChangeHandler}
				/> */}
				<button
					type="submit"
					className="w-full bg-btnblue text-white mt-6 py-3 hover:bg-orange lg:text-lg"
				>
					Change Password
				</button>
			</form>
		</section>
	);
};

export default ResetPassword;

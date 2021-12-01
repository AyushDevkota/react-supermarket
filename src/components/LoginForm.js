import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import PageTitle from "./PageTitle";
import SuccessOverlay from "./SuccessOverlay";
import ErrorOverlay from "./ErrorOverlay";
import { modalContext } from "../App";

const secret = "ZkPYPKRiUsEzVke7Q5sq21DrVvYmNK5w5bZKGzQo";
const LoginForm = () => {
	const navigate = useNavigate();
	const {
		base_url,
		auth,
		success,
		isMessage,
		setMessage,
		setIsMessage,
		setCurrentUser,
	} = useContext(modalContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const emailChangeHandler = (e) => setEmail(e.target.value);
	const passwordChangeHandler = (e) => setPassword(e.target.value);
	const checkLogin = async (user) => {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		};
		const res = await fetch(`${base_url}/${auth}/login`, requestOptions);
		const data = await res.json();
		if (data.errors) {
			setMessage(data.errors[0].message);
			setIsMessage(true);
			return;
		}
		const { access_token } = data;
		setCurrentUser({ access_token });
		navigate("/");
	};
	const loginFormHandler = (e) => {
		e.preventDefault();
		checkLogin({
			password,
			username: email,
			grant_type: "password",
			client_secret: secret,
			client_id: 2,
		});
	};
	useEffect(() => {
		setIsMessage(false);
	}, [setIsMessage]);
	return (
		<section className="px-4 mx-auto py-8 lg:pb-16 lg:max-w-4xl lg:px-0 xl:max-w-6xl lg:py-8">
			<PageTitle title="login form" />
			{success && <SuccessOverlay msg="account created successfully" />}
			<form
				className="w-full mx-auto bg-bgForm p-5 md:w-3/5 md:p-10 lg:w-1/2 xl:w-1/3"
				onSubmit={loginFormHandler}
			>
				{isMessage && <ErrorOverlay />}
				<input
					type="text"
					name="loginForm"
					required
					value={email}
					onChange={emailChangeHandler}
					placeholder="Email Address"
					className="input-form"
				/>
				<input
					type="password"
					name="loginForm"
					required
					value={password}
					onChange={passwordChangeHandler}
					placeholder="Password"
					className="input-form"
				/>
				<Link to="/forgot-password" className="font-medium hover:text-pswd">
					Forgot Password?
				</Link>
				<button
					type="submit"
					className="w-full bg-btnblue text-white mt-6 py-3 hover:bg-orange lg:text-lg"
				>
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

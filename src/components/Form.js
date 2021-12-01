import React, { useReducer, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTitle from "./PageTitle";
import { modalContext } from "../App";
import ErrorOverlay from "./ErrorOverlay";

const formReducer = (state, action) => {
	switch (action.type) {
		case "USER_INPUT_FIRSTNAME":
			return { ...state, first_name: action.value };
		case "USER_INPUT_LASTNAME":
			return { ...state, last_name: action.value };
		case "USER_INPUT_EMAIL":
			return { ...state, email: action.value };
		case "USER_INPUT_MOBILE":
			return { ...state, mobile_number: action.value };
		case "USER_INPUT_PASSWORD":
			return { ...state, password: action.value };
		case "USER_INPUT_CONFIRMPASSWORD":
			return { ...state, confirmPassword: action.value };
		default:
			return state;
	}
};

const Form = () => {
	const navigate = useNavigate();

	const { base_url, auth, isMessage, setIsMessage, setMessage, setNewAccount } =
		useContext(modalContext);
	useEffect(() => {
		setIsMessage(false);
	}, [setIsMessage]);
	const addUser = async (user) => {
		const { confirmPassword, ...others } = user;
		if (user.password !== user.confirmPassword) {
			setMessage("Passwords do not match");
			setIsMessage(true);
			return;
		}
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(others),
		};
		const res = await fetch(`${base_url}/${auth}/signup`, requestOptions);
		const data = await res.json();
		if (data.errors) {
			setMessage(data.errors[0].message);
			setIsMessage(true);
			return;
		}
		user.id = data.id;
		setMessage("Account Created Successfully");
		setNewAccount(true);
		navigate("/login");
	};
	const [formState, dispatchFormState] = useReducer(formReducer, {
		first_name: "",
		last_name: "",
		email: "",
		mobile_number: "",
		password: "",
		confirmPassword: "",
	});
	const formHandler = (e) => {
		e.preventDefault();
		addUser(formState);
	};
	const firstNameChangeHandler = (e) => {
		dispatchFormState({ type: "USER_INPUT_FIRSTNAME", value: e.target.value });
	};
	const lastNameChangeHandler = (e) => {
		dispatchFormState({ type: "USER_INPUT_LASTNAME", value: e.target.value });
	};
	const emailChangeHandler = (e) => {
		dispatchFormState({ type: "USER_INPUT_EMAIL", value: e.target.value });
	};
	const mobileChangeHandler = (e) => {
		dispatchFormState({ type: "USER_INPUT_MOBILE", value: e.target.value });
	};
	const passwordChangeHandler = (e) => {
		dispatchFormState({ type: "USER_INPUT_PASSWORD", value: e.target.value });
	};
	const confirmPasswordChangeHandler = (e) => {
		dispatchFormState({
			type: "USER_INPUT_CONFIRMPASSWORD",
			value: e.target.value,
		});
	};
	return (
		<section className="py-8 px-4 mx-auto lg:pb-16 md:max-w-3xl lg:max-w-4xl lg:px-0 xl:max-w-6xl">
			<PageTitle title="register here" />
			<form
				className="w-full mx-auto bg-bgForm p-5 md:w-3/5 md:p-10 lg:w-1/2 xl:w-2/5"
				onSubmit={formHandler}
			>
				<h3 className="text-base uppercase text-textForm font-bold mb-4">
					Profile information
				</h3>
				<input
					type="text"
					name="firstName"
					placeholder="First Name"
					value={formState.firstName}
					onChange={firstNameChangeHandler}
					required
					className="input-form"
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					value={formState.lastName}
					onChange={lastNameChangeHandler}
					required
					className="input-form"
				/>
				<h3 className="text-base uppercase text-textForm font-bold my-8">
					login information
				</h3>
				{isMessage && <ErrorOverlay />}
				<input
					type="email"
					name="email"
					placeholder="Email Address"
					value={formState.email}
					onChange={emailChangeHandler}
					required
					className="input-form"
				/>
				<input
					type="tel"
					name="mobile"
					placeholder="Mobile Number"
					value={formState.mobile}
					onChange={mobileChangeHandler}
					required
					className="input-form"
					pattern="98[0-9]{8}"
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={formState.password}
					onChange={passwordChangeHandler}
					required
					className="input-form"
				/>
				<input
					type="password"
					name="password"
					placeholder="Password Confirmation"
					value={formState.confirmPassword}
					onChange={confirmPasswordChangeHandler}
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
				<button
					type="submit"
					className="w-full bg-btnblue text-white mt-6 py-2 hover:bg-orange"
				>
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

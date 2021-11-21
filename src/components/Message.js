import React from "react";
import PageTitle from "./PageTitle";

const Message = () => {
	return (
		<aside className="lg:w-1/2">
			<PageTitle title="leave a message" />
			<form className="flex flex-col">
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					className="input-form"
					required
				/>
				<input
					type="email"
					name="email"
					placeholder="Your Email"
					className="input-form"
					required
				/>
				<textarea
					name="messgae"
					cols="30"
					rows="10"
					placeholder="Your message here..."
					className="input-form"
					required
				></textarea>
				<button className="bg-textForm uppercase hover:bg-btnblue py-4 text-white tracking-widest font-bold mt-5">
					Submit
				</button>
			</form>
		</aside>
	);
};

export default Message;

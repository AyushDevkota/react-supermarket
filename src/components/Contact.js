import React from "react";
import Map from "./Map";
import Message from "./Message";

const Contact = () => {
	return (
		<div className="container mx-auto flex py-20 items-center justify-between">
			<Map />
			<Message />
		</div>
	);
};

export default Contact;

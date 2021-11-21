import React from "react";
import Map from "./Map";
import Message from "./Message";

const Contact = () => {
	return (
		<div className="px-4 mx-auto py-8 space-y-8 md:max-w-3xl md:px-8 lg:flex lg:gap-24 md:space-y-0 lg:max-w-4xl lg:px-0 lg:py-16 xl:max-w-6xl">
			<Map />
			<Message />
		</div>
	);
};

export default Contact;

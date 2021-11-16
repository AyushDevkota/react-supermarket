import React, { useState, useEffect } from "react";
import Arrow from "../images/arrow.png";

const GoToTop = () => {
	const [visibility, setVisibility] = useState(false);
	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setVisibility(true);
		} else {
			setVisibility(false);
		}
	};
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);
	return (
		<button
			type="button"
			className={`fixed bottom-3 z-50 right-4 cursor-pointer border-none ${
				visibility ? "opacity-100" : "opacity-0"
			}`}
			onClick={scrollToTop}
		>
			<img src={Arrow} alt="go to top" className="h-8 w-8" />
		</button>
	);
};

export default GoToTop;

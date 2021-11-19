import React, { useState, useEffect } from "react";
import MobileDropDown from "./MobileDropDown";
import PrimaryNavbar from "./PrimaryNavbar";
import SecondaryNavbar from "./SecondaryNavbar";
import Title from "./Title";

const Index = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);
	useEffect(() => {
		const hideMenu = () => {
			if (window.innerWidth > 768 && isOpen) {
				setIsOpen(false);
			}
		};
		window.addEventListener("resize", hideMenu);
		return () => {
			window.removeEventListener("resize", hideMenu);
		};
	});
	return (
		<header>
			<PrimaryNavbar />
			<Title />
			<SecondaryNavbar toggleMenu={toggleMenu} />
			<MobileDropDown isOpen={isOpen} toggleMenu={toggleMenu} />
		</header>
	);
};

export default Index;

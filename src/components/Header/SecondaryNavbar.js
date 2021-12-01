import React, { useContext, useEffect, useState } from "react";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
import { modalContext } from "../../App";
import DropDown from "./DropDown";
import { AiFillCaretDown } from "react-icons/ai";

const SecondaryNavbar = ({ toggleMenu }) => {
	const { isLoading, error, categories } = useContext(modalContext);
	const [visibility, setVisibility] = useState(false);
	const [hover, setHover] = useState(false);
	const toggleVisibility = () => {
		if (window.scrollY > 350) {
			setVisibility(true);
		} else {
			setVisibility(false);
		}
	};
	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	let content = <p></p>;
	if (categories.length > 0) {
		content = categories.map((data) => {
			return (
				<li
					key={data.id}
					className="py-4"
					onMouseEnter={() => {
						if (data.subcategories.length > 0) {
							setHover(true);
						}
					}}
					onMouseLeave={() => {
						if (data.subcategories.length > 0) {
							setHover(false);
						}
					}}
				>
					<div className="flex items-center relative cursor-pointer">
						<Link
							to={`/categories/${data.slug}`}
							className="flex items-center gap-1 uppercase"
						>
							{data.title}
							{data.subcategories.length > 0 && <AiFillCaretDown size={10} />}
						</Link>
						{data.subcategories.length > 0 && (
							<DropDown data={data.subcategories} hover={hover} />
						)}
					</div>
				</li>
			);
		});
	}
	if (error) {
		content = <p>{error}</p>;
	}
	if (isLoading) {
		content = <p></p>;
	}

	return (
		<nav
			className={`bg-orange md:${
				visibility ? "fixed inset-x-0 top-0 z-30" : ""
			}`}
		>
			<div className="md:px-0 md:max-w-3xl mx-auto md:text-sm lg:max-w-4xl lg:px-0 xl:max-w-6xl">
				<div
					className="py-2 px-4 flex justify-end md:hidden"
					onClick={toggleMenu}
				>
					<FcMenu size={20} />
				</div>
				<ul className="hidden md:flex flex-col gap-4 md:gap-8 md:flex-row md:px-8 md:justify-between items-center  text-white lg:px-0 lg:text-base">
					<li className="py-4">
						<Link to="/" className="uppercase">
							Home
						</Link>
					</li>
					{content}
				</ul>
			</div>
		</nav>
	);
};
export default SecondaryNavbar;

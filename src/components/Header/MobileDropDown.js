import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { modalContext } from "../../App";

const MobileDropDown = ({ isOpen, toggleMenu }) => {
	const { homeData, isLoading, error } = useContext(modalContext);
	let content = <p></p>;
	if (Object.keys(homeData).length > 0) {
		content = homeData.data[1].categories.map((data) => {
			return (
				<li key={data.id}>
					<Link to={`/categories/${data.slug}`}>{data.title}</Link>
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
		<ul
			className={
				isOpen
					? "flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center py-4 text-white bg-orange"
					: "hidden"
			}
			onClick={toggleMenu}
		>
			<li>
				<Link to="/">Home</Link>
			</li>
			{content}
		</ul>
	);
};

export default MobileDropDown;

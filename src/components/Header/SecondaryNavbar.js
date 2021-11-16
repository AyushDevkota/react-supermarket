import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import {
	groceries,
	household,
	personal,
	packaged,
	beverages,
} from "./DropDownData";

const SecondaryNavbar = () => {
	// TODO: Learn other hooks so this loooooong piece of code can be reduced.
	const [isGroceriesExpanded, setIsGroceriesExpanded] = useState(false);
	const [isHouseholdExpanded, setIsHouseholdExpanded] = useState(false);
	const [isPersonalExpanded, setIsPersonalExpanded] = useState(false);
	const [isPackagedExpanded, setIsPackagedExpanded] = useState(false);
	const [isBeveragesExpanded, setIsBeveragesExpanded] = useState(false);
	const handleGroceries = () => {
		setIsGroceriesExpanded(!isGroceriesExpanded);
		setIsHouseholdExpanded(false);
		setIsPersonalExpanded(false);
		setIsPackagedExpanded(false);
		setIsBeveragesExpanded(false);
	};
	const handleHousehold = () => {
		setIsHouseholdExpanded(!isHouseholdExpanded);
		setIsGroceriesExpanded(false);
		setIsPersonalExpanded(false);
		setIsPackagedExpanded(false);
		setIsBeveragesExpanded(false);
	};
	const handlePersonal = () => {
		setIsPersonalExpanded(!isPersonalExpanded);
		setIsHouseholdExpanded(false);
		setIsGroceriesExpanded(false);
		setIsPackagedExpanded(false);
		setIsBeveragesExpanded(false);
	};
	const handlePackaged = () => {
		setIsPackagedExpanded(!isPackagedExpanded);
		setIsHouseholdExpanded(false);
		setIsPersonalExpanded(false);
		setIsGroceriesExpanded(false);
		setIsBeveragesExpanded(false);
	};
	const handleBeverages = () => {
		setIsBeveragesExpanded(!isBeveragesExpanded);
		setIsHouseholdExpanded(false);
		setIsPersonalExpanded(false);
		setIsPackagedExpanded(false);
		setIsGroceriesExpanded(false);
	};

	return (
		<nav className="bg-orange">
			<div className="container mx-auto">
				<ul className="flex justify-between items-center py-4 text-white">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li onClick={handleGroceries}>
						<Link to="/" className="flex items-center relative">
							Groceries
							<FaCaretDown size={10} />
							{isGroceriesExpanded && (
								<DropDown data={groceries} title="All Groceries" />
							)}
						</Link>
					</li>
					<li onClick={handleHousehold}>
						<Link to="/" className="flex items-center relative">
							Household
							<FaCaretDown size={10} />
							{isHouseholdExpanded && (
								<DropDown data={household} title="All Household" />
							)}
						</Link>
					</li>
					<li onClick={handlePersonal}>
						<Link to="/" className="flex items-center relative">
							Personal Care
							<FaCaretDown size={10} />
							{isPersonalExpanded && (
								<DropDown data={personal} title="Baby Care" />
							)}
						</Link>
					</li>
					<li onClick={handlePackaged}>
						<Link to="/" className="flex items-center relative">
							Packaged Foods
							<FaCaretDown size={10} />
							{isPackagedExpanded && (
								<DropDown data={packaged} title="All Accessories" />
							)}
						</Link>
					</li>
					<li onClick={handleBeverages}>
						<Link to="/" className="flex items-center relative">
							Beverages
							<FaCaretDown size={10} />
							{isBeveragesExpanded && (
								<DropDown data={beverages} title="Tea & Coffee" />
							)}
						</Link>
					</li>
					<li>
						<Link to="/">Gourmet</Link>
					</li>
					<li>
						<Link to="/">Offers</Link>
					</li>
					<li>
						<Link to="/">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default SecondaryNavbar;

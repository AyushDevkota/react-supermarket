import React, { useReducer } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import {
	groceries,
	household,
	personal,
	packaged,
	beverages,
} from "../../Data/DropDownData";

const reducer = (state, action) => {
	switch (action.type) {
		case "Groceries":
			return { isGroceriesExpanded: !state.isGroceriesExpanded };
		case "Household":
			return { isHouseholdExpanded: !state.isHouseholdExpanded };
		case "Personal":
			return { isPersonalExpanded: !state.isPersonalExpanded };
		case "Packaged":
			return { isPackagedExpanded: !state.isPackagedExpanded };
		case "Beverages":
			return { isBeveragesExpanded: !state.isBeveragesExpanded };
		default:
			return state;
	}
};

const SecondaryNavbar = ({ toggleMenu }) => {
	const [state, dispatch] = useReducer(reducer, {
		isGroceriesExpanded: false,
		isHouseholdExpanded: false,
		isPersonalExpanded: false,
		isPackagedExpanded: false,
		isBeveragesExpanded: false,
	});

	return (
		<nav className="bg-orange">
			<div className="md:px-0 md:max-w-3xl mx-auto md:text-sm lg:max-w-4xl lg:px-0 xl:max-w-6xl">
				<div
					className="py-2 px-4 flex justify-end md:hidden"
					onClick={toggleMenu}
				>
					<FcMenu size={20} />
				</div>
				<ul className="hidden md:flex flex-col gap-4 md:gap-0 md:flex-row justify-between md:px-8 items-center py-4 text-white lg:px-0">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li onClick={() => dispatch({ type: "Groceries" })}>
						<div className="flex items-center relative cursor-pointer">
							Groceries
							<FaCaretDown size={10} />
							{state.isGroceriesExpanded && (
								<DropDown data={groceries} title="All Groceries" />
							)}
						</div>
					</li>
					<li onClick={() => dispatch({ type: "Household" })}>
						<div className="flex items-center relative cursor-pointer">
							Household
							<FaCaretDown size={10} />
							{state.isHouseholdExpanded && (
								<DropDown data={household} title="All Household" />
							)}
						</div>
					</li>
					<li onClick={() => dispatch({ type: "Personal" })}>
						<div className="flex items-center relative cursor-pointer">
							Personal Care
							<FaCaretDown size={10} />
							{state.isPersonalExpanded && (
								<DropDown data={personal} title="Baby Care" />
							)}
						</div>
					</li>
					<li onClick={() => dispatch({ type: "Packaged" })}>
						<div className="flex items-center relative cursor-pointer">
							Packaged Foods
							<FaCaretDown size={10} />
							{state.isPackagedExpanded && (
								<DropDown data={packaged} title="All Accessories" />
							)}
						</div>
					</li>
					<li onClick={() => dispatch({ type: "Beverages" })}>
						<div className="flex items-center relative cursor-pointer">
							Beverages
							<FaCaretDown size={10} />
							{state.isBeveragesExpanded && (
								<DropDown data={beverages} title="Tea & Coffee" />
							)}
						</div>
					</li>
					<li>
						<Link to="/gourmet">Gourmet</Link>
					</li>
					<li>
						<Link to="/offers">Offers</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
export default SecondaryNavbar;

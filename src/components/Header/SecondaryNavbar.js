import React, { useReducer } from "react";
import { FaCaretDown } from "react-icons/fa";
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

const SecondaryNavbar = () => {
	const [state, dispatch] = useReducer(reducer, {
		isGroceriesExpanded: false,
		isHouseholdExpanded: false,
		isPersonalExpanded: false,
		isPackagedExpanded: false,
		isBeveragesExpanded: false,
	});

	return (
		<nav className="bg-orange">
			<div className="container mx-auto">
				<ul className="flex justify-between items-center py-4 text-white">
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

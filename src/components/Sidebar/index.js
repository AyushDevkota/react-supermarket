import React from "react";
import ParentUl from "./ParentUl";
import ChildUl from "./ChildUl";
import { fruits, grocery, personal } from "../../Data/ChildUlData";

const Sidebar = () => {
	return (
		<aside className="border border-nine font-bold ">
			<h2 className="text-2xl uppercase tracking-widest bg-grayf5 text-textForm text-center py-2">
				Categories
			</h2>
			<ul className="p-10 text-nine text-sm">
				<ParentUl
					title="Fruits & Vegetables"
					children={<ChildUl data={fruits} />}
				/>
				<ParentUl title="Grocery & Staples">
					<ChildUl data={grocery} />
				</ParentUl>
				<ParentUl title="Personal Care">
					<ChildUl data={personal} />
				</ParentUl>
			</ul>
		</aside>
	);
};

export default Sidebar;

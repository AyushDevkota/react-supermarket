import React from "react";
import ParentUl from "./ParentUl";
import ChildUl from "./ChildUl";
import { fruits, grocery, personal } from "../../Data/ChildUlData";

const Sidebar = () => {
	return (
		<aside className="border border-nine font-bold lg:w-1/2 lg:h-full">
			<h2 className="text-2xl uppercase tracking-widest bg-grayf5 text-textForm text-center py-2">
				Categories
			</h2>
			<ul className="text-nine text-sm p-4 pb-6 space-y-4 md:p-8 xl:text-base">
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

import React, { useContext } from "react";
import { modalContext } from "../../App";
import ParentUl from "./ParentUl";
import ChildUl from "./ChildUl";

const Sidebar = () => {
	const { isLoading, error, categories } = useContext(modalContext);
	let content = <p></p>;
	if (categories.length > 0) {
		content = categories.map((data) => {
			return (
				<React.Fragment key={data.id}>
					<ParentUl data={data} />
					{data.subcategories.length > 0 && (
						<ChildUl data={data.subcategories} />
					)}
				</React.Fragment>
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
		<aside className="border border-nine font-bold lg:w-1/2 lg:h-full">
			<h2 className="text-2xl uppercase tracking-widest bg-grayf5 text-textForm text-center py-2">
				Categories
			</h2>
			<ul className="text-nine text-sm p-4 pb-6 space-y-4 md:p-8 xl:text-base">
				{content}
			</ul>
		</aside>
	);
};

export default Sidebar;

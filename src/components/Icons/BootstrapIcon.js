import React from "react";
import IconTitle from "./IconTitle";

const BootstrapIcon = ({ data, title }) => {
	return (
		<section>
			<IconTitle title={title} />
			<div className="grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-4 xl:gap-6">
				{data.map(({ id, icon, text }) => {
					return (
						<div
							key={id}
							className="bg-iconbg flex flex-col items-center px-4 py-4 gap-4 h-28"
						>
							{icon}
							<p className="text-lightgray">{text}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default BootstrapIcon;

import React from "react";
import Icons from "./Icons";
import PageTitle from "../PageTitle";
import BootstrapIcon from "./BootstrapIcon";
import { Icon1, Icon2, Icon3, Icon4 } from "../../Data/IconData";

const Code = () => {
	return (
		<section className="px-4 py-8 md:px-8 md:max-w-3xl mx-auto lg:max-w-4xl lg:px-0 xl:max-w-6xl lg:pb-16">
			<div className="mb-8">
				<PageTitle title="icons" />
				<h3 className="text-text222 font-bold text-2xl md:text-3xl text-center tracking-wider mt-8">
					Font Awesome Icons
				</h3>
				<Icons title="30 New Icons" data={Icon1} />
				<Icons title="Web Application Icons" data={Icon2} />
				<Icons title="Form Control Icons" data={Icon3} />
			</div>
			<div>
				<PageTitle title="BOOTSTRAP GLYPHICONS" />
				<BootstrapIcon title="Glyphicons" data={Icon4} />
			</div>
		</section>
	);
};

export default Code;

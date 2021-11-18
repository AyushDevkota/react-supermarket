import React from "react";
import Icons from "./Icons";
import BootstrapIcon from "./BootstrapIcon";
import { Icon1, Icon2, Icon3, Icon4 } from "../../Data/IconData";

const Code = () => {
	return (
		<section className="container mx-auto py-20">
			<h2 className="sub-title">Icons</h2>
			<div className="underline"></div>
			<h3 className="text-text222 font-semibold text-3xl text-center tracking-wider">
				Font Awesome Icons
			</h3>
			<Icons title="30 New Icons" data={Icon1} />
			<Icons title="Web Application Icons" data={Icon2} />
			<Icons title="Form Control Icons" data={Icon3} />
			<h2 className="sub-title pt-10">BOOTSTRAP GLYPHICONS</h2>
			<div className="underline"></div>
			<BootstrapIcon title="Glyphicons" data={Icon4} />
		</section>
	);
};

export default Code;

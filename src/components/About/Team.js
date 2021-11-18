import React from "react";
import data from "../../Data/ProfileData";
import Card from "./Card";

const Team = () => {
	return (
		<section className="container mx-auto pt-10">
			<div className="sub-title">meet our team</div>
			<div className="underline"></div>
			<div className="grid grid-cols-4 gap-4">
				{data.map(({ id, img, name, title, content }) => {
					return (
						<Card
							key={id}
							img={img}
							name={name}
							title={title}
							content={content}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Team;

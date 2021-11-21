import React from "react";
import data from "../../Data/ProfileData";
import PageTitle from "../PageTitle";
import Card from "./Card";

const Team = () => {
	return (
		<section className="px-4 mx-auto pb-4 md:max-w-3xl md:px-8 lg:max-w-4xl lg:px-0 xl:max-w-6xl lg:py-8">
			<PageTitle title="meet our team" />
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
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

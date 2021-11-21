import React, { useState } from "react";
import PageTitle from "./PageTitle";
import data from "../Data/FAQData";

const Question = () => {
	const [isClicked, setIsClicked] = useState(false);
	const toggleAnswer = (index) => {
		if (isClicked === index) return setIsClicked(null);
		setIsClicked(index);
	};
	return (
		<section className="px-4 py-8 md:px-8 md:max-w-3xl mx-auto lg:max-w-4xl lg:px-0 xl:max-w-6xl lg:pb-16 ">
			<PageTitle title="frequently asked questions (faq)" />
			<ul className="pl-4">
				{data.map(({ id, question, answer }, index) => {
					return (
						<li
							key={id}
							className="list-decimal text-sm pl-2 py-1 lg:text-base"
						>
							<h3
								className="cursor-pointer text-nine"
								onClick={() => toggleAnswer(index)}
							>
								{question}
							</h3>
							<div className="accordion-tab">
								<p className="py-2">{isClicked === index ? answer : ""}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Question;

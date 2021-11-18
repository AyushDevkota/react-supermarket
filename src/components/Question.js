import React, { useState } from "react";
import data from "../Data/FAQData";

const Question = () => {
	const [isClicked, setIsClicked] = useState(false);
	const toggleAnswer = (index) => {
		if (isClicked === index) return setIsClicked(null);
		setIsClicked(index);
	};
	return (
		<section className="py-20 container mx-auto">
			<div className="sub-title">FREQUENTLY ASKED QUESTIONS(FAQ)</div>
			<div className="underline"></div>
			<ul>
				{data.map(({ id, question, answer }, index) => {
					return (
						<li key={id} className="list-decimal pl-2 py-2">
							<h3
								className="cursor-pointer text-nine text-base w-max"
								onClick={() => toggleAnswer(index)}
							>
								{question}
							</h3>
							<div className="accordion-tab">
								<p className="text-sm py-2">
									{isClicked === index ? answer : ""}
								</p>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Question;

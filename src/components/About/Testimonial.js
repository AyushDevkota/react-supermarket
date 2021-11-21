import React, { useState, useEffect, useRef } from "react";
import Img1 from "../../images/icon1.png";
import Img2 from "../../images/icon2.png";
import PageTitle from "../PageTitle";

const delay = 3000;
const data = [
	{
		id: 1,
		title: "Excellent leader",
		content: "He is an excellent leader and takes charge when required.",
		author: "John Doe",
		position: "Chief Executive",
	},
	{
		id: 2,
		title: "Friendly colleague",
		content:
			"He is also very friendly and calm which boosts the team's morale when around.",
		author: "Jane Doe",
		position: "Department Head",
	},
	{
		id: 3,
		title: "Best in the profession",
		content:
			"Having worked with him for the past 3 years, I can say that he is the best in this profession.",
		author: "Amy Smith",
		position: "Senior Developer",
	},
];

const Testimonial = () => {
	const [current, setCurrent] = useState(data[0]);
	const timeoutRef = useRef(null);
	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}
	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(handleNextTestimonial, delay);

		return () => {
			resetTimeout();
		};
	}, [current]);
	const handleNextTestimonial = () => {
		setCurrent((previous) => (previous.id === 3 ? data[0] : data[previous.id]));
	};
	const handlePreviousTestimonial = () => {
		setCurrent((previous) =>
			previous.id === 1 ? data[data.length - 1] : data[previous.id - 2]
		);
	};
	return (
		<div className="mt-12">
			<PageTitle title="testimonial" />
			<div className="flex justify-center gap-4">
				<img
					src={Img2}
					alt="previous"
					className="cursor-pointer"
					onClick={handlePreviousTestimonial}
				/>
				<img
					src={Img1}
					alt="next"
					className="cursor-pointer"
					onClick={handleNextTestimonial}
				/>
			</div>

			<figure className="bg-btnblue py-12 px-8 mt-4 inline-block w-full">
				<blockquote>
					<h3 className="uppercase text-white font-bold text-base">
						" {current.title}
					</h3>
					<p className="py-3 text-black text-sm italic">{current.content}</p>
				</blockquote>
				<figcaption>
					<span className="font-bold">{current.author}, </span>
					<cite className="">{current.position}</cite>
				</figcaption>
			</figure>
		</div>
	);
};

export default Testimonial;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Img1 from "../images/b1.jpg";
import Img2 from "../images/b3.jpg";

const myImg = [
	{
		id: 1,
		img: Img1,
		url: "/beverages",
	},
	{
		id: 2,
		img: Img2,
		url: "/personal",
	},
	{
		id: 2,
		img: Img2,
		url: "/household",
	},
];
const delay = 3000;
const SlideShow = () => {
	const [index, setIndex] = useState(0);
	const timeoutRef = useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === myImg.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index]);

	return (
		<article className="mx-auto overflow-hidden">
			<div
				className="whitespace-nowrap transition duration-1000 ease"
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{myImg.map(({ id, img, url }) => (
					<Link to={url}>
						<img
							src={img}
							alt="background"
							className="inline-block w-full"
							key={id}
						/>
					</Link>
				))}
			</div>

			<div className="text-center">
				{myImg.map((_, idx) => (
					<div
						key={idx}
						className={`inline-block h-3 w-3 rounded-full cursor-pointer mt-4 mx-2  ${
							index === idx ? "bg-yellow" : "bg-green"
						}`}
						onClick={() => {
							setIndex(idx);
						}}
					></div>
				))}
			</div>
		</article>
	);
};

export default SlideShow;

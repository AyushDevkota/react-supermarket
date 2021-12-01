import React, { useState, useRef, useEffect } from "react";

const delay = 3000;
const Slides = ({ homeData }) => {
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
					prevIndex === homeData.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [index, homeData]);
	return (
		<article className="mx-auto overflow-hidden">
			<div
				className="whitespace-nowrap transition duration-1000 ease"
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{homeData.map(({ id, images }) => (
					<img
						src={images}
						alt="background"
						className="inline-block w-full"
						key={id}
					/>
				))}
			</div>

			<div className="text-center">
				{homeData.map((_, idx) => (
					<div
						key={idx}
						className={`inline-block h-3 w-3 rounded-full cursor-pointer mt-2 mx-2  ${
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

export default Slides;

import React, { useState, useEffect } from "react";
import Img1 from "../images/11.jpg";
import Img2 from "../images/22.jpg";
import Img3 from "../images/44.jpg";
const delay = 3000;
const mySlideshow = [
	{
		id: 1,
		image_url: Img1,
	},
	{
		id: 2,
		image_url: Img2,
	},
	{
		id: 3,
		image_url: Img3,
	},
];
const HeroSlideShow = () => {
	const [index, setIndex] = useState(0);
	const [imgCaption, setImgCaption] = useState(
		"BUY RICE PRODUCTS ARE NOW ON LINE WITH US"
	);
	useEffect(() => {
		setTimeout(() => {
			setIndex((prevIndex) => {
				setImgCaption("");
				setImgCaption(() =>
					prevIndex === mySlideshow.length - 1
						? "BUY RICE PRODUCTS ARE NOW ON LINE WITH US"
						: "WHOLE SPICES PRODUCTS ARE NOW ON LINE WITH US"
				);
				return prevIndex === mySlideshow.length - 1 ? 0 : prevIndex + 1;
			});
		}, delay);
	}, [index]);
	return (
		<article className="mx-auto overflow-hidden">
			<div
				className="whitespace-nowrap duration-500 ease-in-out"
				style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
			>
				{mySlideshow.map(({ id, image_url }) => {
					return (
						<div className="relative inline-block w-full" key={id}>
							<img src={image_url} alt="department store" className="w-full" />
							<h3 className="text-white w-1/2 mx-auto text-center text-4xl whitespace-pre-wrap absolute top-1/3 left-1/4 font-medium py-4">
								{imgCaption}
							</h3>
						</div>
					);
				})}
			</div>
		</article>
	);
};

export default HeroSlideShow;

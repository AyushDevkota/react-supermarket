import React from "react";
import Img1 from "../images/111.jpg";
import Img2 from "../images/p2.jpg";
import Img3 from "../images/p3.jpg";
import Img4 from "../images/p4.jpg";

const GridImg = () => {
	return (
		<section className="py-8 px-8 lg:flex lg:items-center">
			<div className="flex flex-col gap-3 md:max-w-3xl md:px-8 lg:max-w-4xl lg:h-screen lg:flex-row mx-auto lg:gap-5 xl:max-w-6xl">
				<article className="overflow-hidden lg:w-1/2">
					<img
						src={Img1}
						alt="Food"
						className="transform hover:scale-110 duration-1000 ease w-full"
					/>
				</article>
				<div className="lg:flex lg:flex-col lg:w-1/2 lg:gap-5">
					<article className="hidden overflow-hidden lg:block">
						<img
							src={Img2}
							alt="Food"
							className="transform hover:scale-110 duration-1000 ease w-full"
						/>
					</article>
					<div className="flex gap-3">
						<article className="overflow-hidden ">
							<img
								src={Img3}
								alt="Food"
								className="transform hover:scale-110 duration-1000 ease w-full"
							/>
						</article>
						<article className="overflow-hidden ">
							<img
								src={Img4}
								alt="Food"
								className="transform hover:scale-110 duration-1000 ease w-full"
							/>
						</article>
					</div>
				</div>
				<article className="overflow-hidden lg:hidden">
					<img
						src={Img2}
						alt="Food"
						className="transform hover:scale-110 duration-1000 ease w-full"
					/>
				</article>
			</div>
		</section>
	);
};

export default GridImg;

// .parent {
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   grid-template-rows: repeat(5, 1fr);
//   grid-column-gap: 15px;
//   grid-row-gap: 15px;
//   }

//   .div1 { grid-area: 1 / 1 / 3 / 3; }
//   .div2 { grid-area: 3 / 1 / 4 / 2; }
//   .div3 { grid-area: 3 / 2 / 4 / 3; }
//   .div4 { grid-area: 1 / 3 / 4 / 5; }

import React from "react";
import Img1 from "../images/111.jpg";
import Img2 from "../images/p2.jpg";
import Img3 from "../images/p3.jpg";
import Img4 from "../images/p4.jpg";

const GridImg = () => {
	return (
		<section className="py-12 container mx-auto">
			<div className="grid grid-cols-5 grid-row-5 gap-4 sm:pl-24 md:pl-40">
				<article className="overflow-hidden col-start-3 col-end-5 row-start-1 row-end-4">
					<img
						src={Img1}
						alt="Food"
						className="transform hover:scale-110 duration-1000 ease"
					/>
				</article>
				<article className="overflow-hidden col-start-1 col-end-3 row-start-1 row-end-3">
					<img
						src={Img2}
						alt="Food"
						className="transform hover:scale-110 duration-1000 ease"
					/>
				</article>
				<article className="overflow-hidden col-start-1 col-end-2 row-start-3 row-end-4">
					<img
						src={Img3}
						alt="Food"
						className="transform hover:scale-110 duration-1000 ease"
					/>
				</article>
				<article className="overflow-hidden col-start-2 col-end-3 row-start-3 row-end-4">
					<img
						src={Img4}
						alt="Food"
						className="transform hover:scale-110 duration-1000 ease"
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

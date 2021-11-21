import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import NewOffers from "./NewOffers";
import { modalContext } from "../App";

const SingleProduct = ({
	id,
	img,
	title,
	description,
	discount_price,
	full_price,
}) => {
	const { showModal, updateCart } = useContext(modalContext);
	return (
		<section className="pt-4">
			<div className="px-4 md:px-8 md:max-w-3xl mx-auto lg:max-w-4xl lg:px-0 xl:max-w-6xl lg:pb-16 flex flex-col gap-8 pb-8 md:flex-row">
				<div className="shadow-2xl rounded flex justify-center items-center md:w-full">
					<img src={img} alt="single product" className="" />
				</div>
				<div className="flex flex-col gap-3 lg:gap-8">
					<h1 className="uppercase font-bold text-lg text-textForm md:text-2xl">
						{title}
					</h1>
					<div className="flex">
						<AiFillStar color={"#3399cc"} />
						<AiFillStar color={"#3399cc"} />
						<AiFillStar color={"#3399cc"} />
						<AiFillStar color={"#3399cc"} />
						<AiFillStar color={"#808080"} />
					</div>
					<div>
						<p className="uppercase font-semibold mb-1 xl:text-xl">
							description :
						</p>
						<p className="text-nine text-sm leading-6 xl:text-base">
							{description}
						</p>
					</div>
					<div className="flex gap-4 lg:text-lg">
						<p className="font-semibold">${discount_price}.00</p>
						<del>${full_price}.00</del>
					</div>
					<button
						className="bg-btnblue text-white py-1 uppercase hover:bg-orange w-1/2 lg:text-lg"
						onClick={function () {
							showModal();
							updateCart({
								id,
								title,
								discount_price,
								img,
								qty: 1,
							});
						}}
					>
						add to cart
					</button>
				</div>
			</div>
			<NewOffers />
		</section>
	);
};

export default SingleProduct;

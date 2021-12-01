import React, { useContext } from "react";
import { modalContext } from "../App";

const Item = ({ data }) => {
	const { showModal, currentItem } = useContext(modalContext);
	return (
		<article className="bg-white mx-auto border rounded-lg hover:border-orange">
			<img
				src={data.images[0].imageName}
				alt={data.title}
				className="rounded-t-lg"
			/>
			<div className="p-4 space-y-2">
				<h1 className="text-xs">{data.categoryTitle}</h1>
				<h2 className="text-sm font-bold">{data.title}</h2>
				<p className="text-green text-sm">
					NRS {data.unitPrice[0].sellingPrice}
				</p>
				<button
					className="uppercase text-sm hover:underline"
					onClick={function () {
						showModal();
						currentItem(data);
					}}
				>
					Add to Cart
				</button>
			</div>
		</article>
	);
};

export default Item;

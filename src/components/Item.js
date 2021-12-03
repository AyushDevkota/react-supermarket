import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { modalContext } from "../App";

const Item = ({ data, loading }) => {
	const { showModal, currentItem } = useContext(modalContext);

	return (
		<article className="bg-white mx-auto border rounded-lg hover:border-orange">
			<Link to={`/products/${data.slug}`}>
				<img
					src={data.images[0].imageName}
					alt={data.title}
					className="rounded-t-lg"
					loading={loading}
				/>
			</Link>
			<div className="p-4 flex flex-col gap-2">
				<Link to={`/categories/${data.categorySlug}`} className="text-xs">
					{data.categoryTitle}
				</Link>
				<Link to={`/products/${data.slug}`} className="text-sm font-bold">
					{data.title}
				</Link>
				<p className="text-green text-sm">
					NRS {data.unitPrice[0].sellingPrice}
				</p>
				<button
					className="uppercase text-sm hover:underline text-left w-max"
					onClick={function () {
						showModal();
						currentItem(data);
					}}
				>
					add to cart
				</button>
			</div>
		</article>
	);
};

export default Item;

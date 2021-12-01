import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ data }) => {
	return (
		<Link to={`/categories/${data.slug}`} className="text-sm mt-4 ">
			<article
				className="py-8 pl-8 space-y-2"
				style={{
					backgroundImage: `url(${data.icon})`,
					backgroundSize: "cover",
					backgroundPosition: "right",
					backgroundRepeat: "no-repeat",
				}}
			>
				<h3 className="font-semibold text-lg">{data.title}</h3>
				<p className="text-nine text-sm">{data.productCount} Products.</p>
				<p className="hover:text-orange">Shop Now</p>
			</article>
		</Link>
	);
};

export default CategoryItem;

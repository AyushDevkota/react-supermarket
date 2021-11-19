import React from "react";

const AddBtn = ({ showModal }) => {
	return (
		<button
			className="bg-btnblue text-white uppercase w-1/2 py-1 hover:bg-orange text-sm"
			onClick={showModal}
		>
			Add to cart
		</button>
	);
};

export default AddBtn;

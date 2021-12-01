import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Counter = ({ value, setValue }) => {
	const onIncrement = () => {
		setValue((prev) => prev + 1);
	};
	const onDecrement = () => {
		if (value === 1) return;
		setValue((prev) => prev - 1);
	};
	return (
		<div className="flex items-center">
			<button
				className="border h-10 w-7 flex justify-center items-center hover:bg-bge5"
				onClick={onDecrement}
			>
				<AiOutlineMinus />
			</button>
			<div className="border h-10 w-7 flex justify-center items-center bg-bge5 text-texta9 cursor-default">
				{value}
			</div>
			<button
				className="border h-10 w-7 flex justify-center items-center hover:bg-bge5"
				onClick={onIncrement}
			>
				<AiOutlinePlus />
			</button>
		</div>
	);
};

export default Counter;

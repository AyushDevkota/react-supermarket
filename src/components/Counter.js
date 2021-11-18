import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Counter = ({ value, onIncrement, onDecrement }) => {
	return (
		<div className="flex items-center justify-center gap-2">
			<button
				className="border h-10 w-10 flex justify-center items-center hover:bg-bge5"
				onClick={onDecrement}
			>
				<AiOutlineMinus />
			</button>
			<div className="border h-10 w-10 flex justify-center items-center bg-bge5 text-texta9 cursor-default">
				{value}
			</div>
			<button
				className="border h-10 w-10 flex justify-center items-center hover:bg-bge5"
				onClick={onIncrement}
			>
				<AiOutlinePlus />
			</button>
		</div>
	);
};

export default Counter;

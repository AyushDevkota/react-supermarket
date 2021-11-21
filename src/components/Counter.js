import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Counter = ({ value, onIncrement, onDecrement, id }) => {
	return (
		<div className="flex flex-col items-center justify-center gap-2 md:flex-row">
			<button
				className="border h-5 w-5 flex justify-center items-center hover:bg-bge5 md:h-8 md:w-8"
				onClick={() => onDecrement(id)}
			>
				<AiOutlineMinus />
			</button>
			<div className="border h-5 w-5 flex justify-center items-center bg-bge5 text-texta9 cursor-default md:h-8 md:w-8">
				{value}
			</div>
			<button
				className="border h-5 w-5 flex justify-center items-center hover:bg-bge5 md:h-8 md:w-8"
				onClick={() => onIncrement(id)}
			>
				<AiOutlinePlus />
			</button>
		</div>
	);
};

export default Counter;

import React from "react";
import { IoIosClose } from "react-icons/io";

const Modal = ({ closeModal }) => {
	return (
		<article className="flex justify-center">
			<div className="fixed z-50 w-1/2 mx-auto">
				<div className="relative bg-bgmodal border border-bordermodal shadow-modal top-16">
					<span
						className="absolute right-2 top-2 text-2xl cursor-pointer"
						onClick={closeModal}
					>
						<IoIosClose />
					</span>
					<div className="mt-8 p-4">
						<div className="border border-grayccc p-4">
							<ul>
								<li className="flex">
									<div className="text-sm w-3/5 space-y-2">
										<h3 className="font-bold">Fortune Sunflower Oil</h3>
										<p className="text-nine">Discount: $1.00</p>
									</div>
									<div className="w-1/6">
										<input
											type="number"
											name="quantity"
											defaultValue="1"
											autoComplete="off"
											className="w-8 h-5 text-xs border border-grayccc modal-num"
										/>
									</div>
									<div className="w-1/12">
										<button className="bg-btnblue text-xs px-2 py-1 text-white">
											X
										</button>
									</div>
									<div className="text-right w-1/6">
										<span>$9.00</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

export default Modal;

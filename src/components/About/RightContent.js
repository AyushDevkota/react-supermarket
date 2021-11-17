import React from "react";
import Testimonial from "../Testimonial";

const RightContent = () => {
	return (
		<aside className="w-1/3">
			<div className="text-center">
				<div className="p-4 bg-orange">
					<h4 className="text-3xl text-white font-bold">Praesentium :</h4>
				</div>
				<div className="py-6 px-8 bg-textForm">
					<h5 className="text-lg text-white tracking-widest font-bold">
						At vero eos
					</h5>
					<h5 className="text-lg text-white tracking-widest font-bold">
						Accusamus et
					</h5>
					<p className="text-base text-textbbb mt-2">
						Dignissimos at vero eos et accusamus et iusto odio ducimus qui
						accusamus et.
					</p>
				</div>
			</div>

			<Testimonial />
		</aside>
	);
};

export default RightContent;

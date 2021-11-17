import React from "react";
import Img1 from "../../images/p3.jpg";
import Img2 from "../../images/p4.jpg";

const LeftContent = () => {
	return (
		<aside className="w-3/5 flex flex-col gap-8">
			<div>
				<h2 className="text-text222 text-2xl tracking-widest font-bold">
					Blanditiis praesentium deleniti atque corrupti quos
				</h2>
				<p className="my-4 text-nine text-base">
					Gnissimos voluptatum deleniti atque corrupti quos dolores et quas
					molestias excepturi. atque corrupti quos dolores et quas molestias
					excepturi sint occaecat officia deserunt mollitia laborum et dolorum
					fuga
				</p>
				<p className="text-nine text-base">
					Dignissimos at vero eos et accusamus et iusto odio ducimus qui
					blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
					et quas molestias excepturi sint occaecat officia deserunt mollitia
					laborum et dolorum fuga. At vero eos et accusamus et iusto odio
					dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
					atque corrupti quos dolores et quas molestias excepturi sint occaecat
					atque corrupti quos dolores et quas molestias excepturi sint occaecat
					officia deserunt mollitia laborum et dolorum
				</p>
			</div>
			<div className="flex w-full">
				<img src={Img1} alt="Show" className="w-1/3" />
				<img src={Img2} alt="Show" className="w-1/3" />
				<img src={Img1} alt="Show" className="w-1/3" />
			</div>
		</aside>
	);
};

export default LeftContent;

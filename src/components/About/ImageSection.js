import React from "react";
import Img from "../../images/22.jpg";

const ImageSection = () => {
	return (
		<section className="py-20 ">
			<div
				className="w-full h-auto text-white flex justify-center items-center"
				style={{
					backgroundImage: `url(${Img})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
				}}
			>
				<div className="w-2/3 text-center py-24">
					<h3 className="font-bold text-6xl">
						Lorem Ipsum is that it has a moreless normal
					</h3>
					<p className="text-lg mt-8">
						Lorem Ipsum generators on the Internet tend to repeat predefined
						chunks on the Internet tend as necessary, making this the first true
						generator on the Internet embarrassing hidden in the middle of text
						Lorem Ipsum generators on the Internet tend to repeat
						predefinedchunks as necessary, making this the first true generator
						on the.
					</p>
				</div>
			</div>
		</section>
	);
};

export default ImageSection;

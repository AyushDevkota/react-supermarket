import React from "react";
import Img from "../../images/22.jpg";

const ImageSection = () => {
	return (
		<section className="py-8">
			<div
				className="w-full h-96 text-white flex justify-center items-center lg:h-auto lg:py-24"
				style={{
					backgroundImage: `url(${Img})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundAttachment: "fixed",
				}}
			>
				<div className="w-full px-4 mx-auto text-center py-0 lg:px-24 xl:px-64">
					<h3 className="font-bold text-lg md:text-4xl lg:text-6xl">
						Lorem Ipsum is that it has a moreless normal
					</h3>
					<p className="text-sm mt-6 md:text-base lg:text-lg">
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

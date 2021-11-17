import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsGlobe, BsVimeo } from "react-icons/bs";
import ImgCard from "../../images/card.png";

const Socials = () => {
	return (
		<section className="bg-bgSocial py-4">
			<div className="container mx-auto">
				<div className="flex items-center justify-between">
					<div className="text-white flex gap-2">
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noreferrer"
							className="flex justify-center items-center border-2 border-white rounded-full w-8 h-8 hover:bg-fb hover:border-fb"
						>
							<FaFacebookF />
						</a>
						<a
							href="https://twitter.com/"
							target="_blank"
							rel="noreferrer"
							className="flex justify-center items-center border-2 border-white rounded-full w-8 h-8 hover:bg-twitter hover:border-twitter"
						>
							<FaTwitter />
						</a>
						<a
							href="https://www.globe.com.ph/"
							target="_blank"
							rel="noreferrer"
							className="flex justify-center items-center border-2 border-white rounded-full w-8 h-8 hover:bg-web hover:border-web"
						>
							<BsGlobe />
						</a>
						<a
							href="https://vimeo.com/"
							target="_blank"
							rel="noreferrer"
							className="flex justify-center items-center border-2 border-white rounded-full w-8 h-8 hover:bg-vimeo hover:border-vimeo"
						>
							<BsVimeo />
						</a>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="flex items-center mr-8">
						<img src={ImgCard} alt="Payment methods" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Socials;

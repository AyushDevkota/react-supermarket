import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsGlobe, BsVimeo } from "react-icons/bs";
import ImgCard from "../../images/card.png";
import { Link } from "react-router-dom";

const Socials = () => {
	return (
		<section className="bg-bgSocial py-4">
			<div className="container mx-auto">
				<div className="flex items-center justify-between">
					<div className="text-white flex gap-2">
						<Link
							to="./"
							className="flex justify-center items-center border-2 border-white rounded-full w-8 h-8 hover:bg-fb hover:border-fb"
						>
							<FaFacebookF />
						</Link>
						<Link
							to="./"
							className="flex justify-center items-center border-2 border-white rounded-full w-8 h-8 hover:bg-twitter hover:border-twitter"
						>
							<FaTwitter />
						</Link>
						<Link
							to="./"
							className="flex justify-center items-center border-2 border-white rounded-full w-8 h-8 hover:bg-web hover:border-web"
						>
							<BsGlobe />
						</Link>
						<Link
							to="./"
							className="flex justify-center items-center border-2 border-white rounded-full w-8 h-8 hover:bg-vimeo hover:border-vimeo"
						>
							<BsVimeo />
						</Link>
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

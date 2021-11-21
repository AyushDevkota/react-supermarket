import React from "react";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineGooglePlus } from "react-icons/ai";

const Card = ({ id, img, name, title, content }) => {
	return (
		<article className="bg-btnblue max-w-xs mx-auto px-8 py-8 flex flex-col justify-center items-center profile lg:px-4">
			<div className="relative">
				<img src={img} alt="potrait" className="w-full" />
				<div className="bg-bgprofile hidden social-bar justify-center items-center gap-3 absolute top-2/3 w-full py-5">
					<a
						href="https://www.facebook.com/"
						target="_blank"
						rel="noreferrer"
						className="hover:text-black"
					>
						<FiFacebook size={19} className="hover:text-white" />
					</a>
					<a href="https://twitter.com/" target="_blank" rel="noreferrer">
						<FiTwitter className="hover:text-white" />
					</a>
					<a
						href="https://myaccount.google.com/profile"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineGooglePlus size={25} className="hover:text-white" />
					</a>
				</div>
			</div>
			<p className="py-4 text-black font-bold text-left w-full">
				<span className="uppercase mr-4 text-xl xl:text-2xl">{name},</span>
				<span className="capitalize text-sm xl:text-xl">{title}</span>
			</p>
			<p className="text-white text-sm font-normal">{content}</p>
		</article>
	);
};

export default Card;

import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaTumblr, FaFacebookF } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { BiRss } from "react-icons/bi";

const ContactInfo = () => {
	return (
		<article className="p-8 w-1/2 bg-btnblue absolute top-1/4 left-3/4 z-50 text-white">
			<div className="p-8 border-4 border-double font-bold">
				<h2 className=" text-black text-2xl mb-4">Contact Info</h2>
				<p className="mb-8">1234k Avenue, 4th block, New York City.</p>
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-2">
						<BsEnvelope />
						<Link to="/" className="text-sm">
							info@example.com
						</Link>
					</div>
					<div className="flex items-center gap-2">
						<FaPhoneAlt />
						<p className="text-sm">+(0123) 232 232</p>
					</div>
					<div className="flex text gap-2">
						<Link to="./" className="p-2 bg-white fb-container">
							<FaFacebookF className="contact-icons fb" />
						</Link>
						<Link to="./" className="p-2 bg-white rss-container">
							<BiRss className="contact-icons rss" />
						</Link>
						<Link to="./" className="p-2 bg-white tmblr-container">
							<FaTumblr className="contact-icons tmblr" />
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
};

export default ContactInfo;

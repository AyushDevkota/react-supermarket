import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaTumblr, FaFacebookF } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { BiRss } from "react-icons/bi";

const ContactInfo = () => {
	return (
		<article className="p-4 bg-btnblue absolute top-1/4 left-1/5 z-50 text-white md:w-64 md:p-6 md:left-1/2 lg:w-72">
			<div className="p-3 border-4 border-double font-bold md:p-6">
				<h2 className=" text-black text-xl mb-4 md:text-2xl">Contact Info</h2>
				<p className="mb-8">1234k Avenue, 4th block, New York City.</p>
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-2">
						<BsEnvelope />
						<a
							href="mailto:info@example.com"
							target="_blank"
							rel="noreferrer"
							className="text-sm"
						>
							info@example.com
						</a>
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

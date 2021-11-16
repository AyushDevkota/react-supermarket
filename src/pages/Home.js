import React from "react";
import Header from "../components/Header/Index";
import HeroSlideShow from "../components/HeroSlideShow";
import TopOffers from "../components/TopOffers";
import SlideShow from "../components/SlideShow";
import GridImg from "../components/GridImg";
import BrandStore from "../components/BrandStore";
import NewOffers from "../components/NewOffers";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
const Home = () => {
	return (
		<>
			<Header />
			<HeroSlideShow />
			<TopOffers />
			<SlideShow />
			<GridImg />
			<BrandStore />
			<NewOffers />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Home;

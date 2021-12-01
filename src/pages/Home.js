import React from "react";
import Header from "../components/Header/Index";
import Categories from "../components/Categories";
import SlideShow from "../components/SlideShow";
import GridImg from "../components/GridImg";
import NewDishes from "../components/NewDishes";
import Footer from "../components/Footer/index";
import GoToTop from "../components/GoToTop";
import AddToCart from "../components/AddToCart";
import useDocumentTitle from "../useDocumentTitle";
import TodaysDeals from "../components/TodaysDeals";

const Home = () => {
	useDocumentTitle("Supermarket | Home");
	return (
		<>
			<AddToCart />
			<Header />
			<SlideShow />
			<Categories />
			<NewDishes />
			<GridImg />
			<TodaysDeals />
			<Footer />
			<GoToTop />
		</>
	);
};

export default Home;

import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Products from "./pages/Products";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Codes from "./pages/Codes";
import Checkout from "./pages/Checkout";
import ForgotPassword from "./pages/ForgotPassword";
import Categories from "./pages/Categories";
import DetailProduct from "./pages/DetailProduct";

export const modalContext = React.createContext();
const base_url = "https://uat.ordering-boafresh.ekbana.net/";
const auth = "api/v4/auth";
const api_key =
	"fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545";

function App() {
	const [currentUser, setCurrentUser] = useState("");
	const [isShowing, setIsShowing] = useState(false);
	const closeModal = () => setIsShowing(false);
	const showModal = () => setIsShowing(true);
	const [isMessage, setIsMessage] = useState(false);
	const [message, setMessage] = useState("");
	const [newAccount, setNewAccount] = useState(false);
	const [homeData, setHomeData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [categories, setCategories] = useState([]);
	const [cartData, setCartData] = useState();
	const [addItem, setAddItem] = useState();
	const [modalContent, setModalContent] = useState();
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		fetchCartData();
	}, [currentUser, addItem]);

	const fetchData = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const responseHomeData = await fetch(`${base_url}/api/v4/newhome`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"Api-key": api_key,
					"Warehouse-Id": 1,
				},
			});
			const responseCategory = await fetch(`${base_url}/api/v4/category`, {
				headers: { "Content-Type": "application/json", "Api-key": api_key },
			});

			if (!responseHomeData.ok) {
				throw new Error("Something went wrong home!");
			}
			if (!responseCategory.ok) {
				throw new Error("Something went wrong category!");
			}

			const homeData = await responseHomeData.json();
			setHomeData(homeData);
			const dataCategory = await responseCategory.json();
			setCategories(dataCategory.data);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
		const user = localStorage.getItem("login");
		if (user) {
			setCurrentUser({ access_token: user });
		}
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const currentItem = (item) => {
		setModalContent(item);
	};

	// API call to fetch cart data of current user
	const fetchCartData = async () => {
		const responseCartData = await fetch(`${base_url}/api/v4/cart`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Api-key": api_key,
				"Warehouse-Id": 1,
				Authorization: currentUser.access_token,
			},
		});
		const fetchedCartData = await responseCartData.json();
		setCartData(fetchedCartData.data);
	};

	// API call to delete item
	const deleteItem = async (id) => {
		const response = await fetch(`${base_url}/api/v4/cart-product/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Api-key": api_key,
				"Warehouse-Id": 1,
				Authorization: currentUser.access_token,
				cartProductId: id,
			},
		});
		fetchCartData();
	};

	// API call to add to cart
	const addToCart = async (item) => {
		const response = await fetch(`${base_url}/api/v4/cart-product`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Api-key": api_key,
				"Warehouse-Id": 1,
				Authorization: currentUser.access_token,
			},
			body: JSON.stringify({
				productId: item.productId,
				priceId: item.priceId,
				quantity: item.quantity,
				note: item.note,
			}),
		});
		const data = await response.json();
		setAddItem(data);
		closeModal();
		setSuccess(true);
	};

	// API call to update cart
	const updateCart = async ({ quantity, id }) => {
		const response = await fetch(`${base_url}/api/v4/cart-product/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Api-key": api_key,
				"Warehouse-Id": 1,
				Authorization: currentUser.access_token,
			},
			body: JSON.stringify({
				quantity: quantity,
			}),
		});
		const data = await response.json();
		setAddItem(data);
		closeModal();
		setSuccess(true);
	};

	const providerValues = {
		isShowing,
		closeModal,
		showModal,
		deleteItem,
		addToCart,
		base_url,
		auth,
		api_key,
		isMessage,
		setIsMessage,
		message,
		setMessage,
		newAccount,
		setNewAccount,
		currentUser,
		setCurrentUser,
		homeData,
		isLoading,
		error,
		categories,
		cartData,
		modalContent,
		currentItem,
		success,
		setSuccess,
		updateCart,
	};

	return (
		<modalContext.Provider value={providerValues}>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<CreateAccount />} />
				<Route path="/login" element={<Login />} />
				<Route path="/contact" element={<Help />} />
				<Route path="/categories/:slug" element={<Products />} />
				<Route path="/about" element={<About />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/codes" element={<Codes />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/categories" element={<Categories />} />
				<Route path="/products/:slug" element={<DetailProduct />} />
			</Routes>
		</modalContext.Provider>
	);
}

export default App;

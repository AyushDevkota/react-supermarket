import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Groceries from "./pages/Groceries";
import Household from "./pages/Household";
import PersonalCare from "./pages/PersonalCare";
import PackagedFoods from "./pages/PackagedFoods";
import Beverages from "./pages/Beverages";
import Products from "./pages/Products";
import Gourmet from "./pages/Gourmet";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Codes from "./pages/Codes";
import Single from "./pages/Single";
import Checkout from "./pages/Checkout";

function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<CreateAccount />} />
				<Route path="/login" element={<Login />} />
				<Route path="/contact" element={<Help />} />
				<Route path="/groceries" element={<Groceries />} />
				<Route path="/household" element={<Household />} />
				<Route path="/personal" element={<PersonalCare />} />
				<Route path="/packaged" element={<PackagedFoods />} />
				<Route path="/beverages" element={<Beverages />} />
				<Route path="/products" element={<Products />} />
				<Route path="/gourmet" element={<Gourmet />} />
				<Route path="/offers" element={<Offers />} />
				<Route path="/about" element={<About />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/codes" element={<Codes />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/single" element={<Single />} />
			</Routes>
		</>
	);
}

export default App;

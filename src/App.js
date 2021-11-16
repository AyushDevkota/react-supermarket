import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import Help from "./pages/Help";

function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<CreateAccount />} />
				<Route path="/login" element={<Login />} />
				<Route path="/contact" element={<Help />} />
			</Routes>
		</>
	);
}

export default App;

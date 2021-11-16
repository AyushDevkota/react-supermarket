import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;

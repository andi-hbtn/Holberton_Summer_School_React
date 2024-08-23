import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";

const App = () => {

	return (
		<BrowserRouter basename="game-shop">
			<Routes>
				<Route path="/shop" element={<Shop />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

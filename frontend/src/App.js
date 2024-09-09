import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "./context/Game";
import Shop from "./pages/Shop/Shop";
import Game from "./pages/Admin/Game";

const App = () => {

	return (
		<GameProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/shop" element={<Shop />} />

					<Route path="/admin/create-games" element={<Game />} />
				</Routes>
			</BrowserRouter>
		</GameProvider>
	);
}

export default App;
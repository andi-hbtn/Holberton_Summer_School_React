import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameProvider } from "./context/Game";
import Shop from "./pages/Shop/Shop";
import CreateGame from "./pages/Admin/CreateGame";
import AllGames from "./pages/Admin/AllGames";

const App = () => {

	return (
		<GameProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/shop" element={<Shop />} />

					<Route path="/admin/create-games" element={<CreateGame />} />
					<Route path="/admin/all-games" element={<AllGames />} />
				</Routes>
			</BrowserRouter>
		</GameProvider>
	);
}

export default App;
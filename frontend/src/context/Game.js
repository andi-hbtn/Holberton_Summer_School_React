import { createContext, useContext, useState, useEffect } from "react";
import { getAll, createGame } from "../services/games";
const GameContext = createContext({});
const GameProvider = (props) => {
	const [games, setGames] = useState([]);
	useEffect(() => {
		getAll()
	}, []);

	const get_all_games = async () => {
		try {
			const result = await getAll();
			if (result.status === 200) {
				setGames(result.data);
			}
			return;
		} catch (error) {
			return error;
		}
	}

	const create_game = async (data) => {
		try {
			const result = await createGame(data);
			if (result.status === 200) {
				get_all_games()
			}
		} catch (error) {
			return error
		}
	}

	const values = { games, get_all_games, create_game };
	return (
		< GameContext.Provider value={values} >
			{props.children}
		</GameContext.Provider >
	)
}

const useGameContext = () => { return useContext(GameContext) };
export { GameProvider, useGameContext }
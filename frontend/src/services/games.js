import axios from "axios";

const URI = "http://localhost:3000/api/games";

const getAll = async () => {
	return await axios.get(`${URI}/all`);
}

const createGame = async (data) => {
	//console.log("---in services---", data);
	return await axios.post(`${URI}/create`, data, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	});
}

export { getAll, createGame, }
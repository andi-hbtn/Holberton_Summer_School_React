import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default function SearchGames({ fullGameList, setGames }) {

	const handleChange = (event) => {
		const value = event.target.value.trim().toLowerCase();
		const searchedGame = fullGameList.filter((game, index) => {
			return (typeof game.title === "string" && game.title.toLowerCase().includes(value))
		});
		setGames(searchedGame);

	}
	return (
		<Row>
			<Col xs={12} sm={6}>
				<Form.Control onChange={handleChange} size="lg" type="text" placeholder="Type..." />
			</Col>
		</Row>
	)
}
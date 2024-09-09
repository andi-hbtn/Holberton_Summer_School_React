import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import "./Shop.css";
import Header from "../../components/Header/Header";
import SearchGames from '../../components/SearchGames/SearchGames';
import Footer from "../../components/Footer/Footer";
import GameCart from "../../components/GameCard/GameCard";
import games from "../../services/games_service";

export default function Shop() {

	const [gameLists, setGames] = useState(games);
	const [fullGameList, setFullGameList] = useState([]);
	
	useEffect(() => {
		setFullGameList(games);
	}, [gameLists]);
	return (
		<>
			<Row>
				<Col>
					<Header />
				</Col>
			</Row>
			<Row>
				<Col className="top-margin">
					<Container>
						<SearchGames fullGameList={fullGameList} setGames={setGames} />
					</Container>
				</Col>
			</Row>
			<Row>
				<Col>
					<Container>
						<Row>
							{
								gameLists.map((el, index) => {
									return (
										<Col key={index} xs={12} sm={3} md={3} className="top-margin">
											<GameCart games={el} />
										</Col>
									)
								})
							}

						</Row>
					</Container>
				</Col>
			</Row>
			<Row>
				<Col>
					<Footer />
				</Col>
			</Row>
		</>
	)
}
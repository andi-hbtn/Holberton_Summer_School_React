import { Card, Button } from 'react-bootstrap';
import { FaCartPlus } from "react-icons/fa";

import "./GameCard.css";
export default function GameCart({ games }) {

	return (
		<>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant="top" src={games.image} />
				<Card.Body>
					<Card.Title className="game-title">{games.title}</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">{games.category}</Card.Subtitle>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<Button variant="success">
						<span style={{ marginRight: "10px" }}>Add to Cart</span>
						<FaCartPlus />
					</Button>
					<Button variant="warning" className="price-container">{games.price}</Button>

				</Card.Body>
			</Card>
		</>
	)
}
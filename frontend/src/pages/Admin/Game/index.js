import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useGameContext } from '../../../context/Game';
import "./index.css";

const Game = () => {
	const { create_game } = useGameContext();

	const [game, setGame] = useState({ title: "", category: "", price: 0, discount: 0, description: "", image: [] });

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData();
		formData.append('title', game.title);
		formData.append('category', game.category);
		formData.append('price', game.price);

		formData.append('discount', game.discount);
		formData.append('description', game.description);
		formData.append('title', game.title);
		formData.append('image', game.image);

		await create_game(formData);
		return
	}


	const handleChange = (event) => {
		const { value, name } = event.target;

		setGame((prevState) => {
			return { ...prevState, [name]: value }
		})
	}

	return (
		<Container>

			<Row>
				<Col md={6} className='game-form'>
					<h4>Create a new game</h4>
				</Col>
			</Row>

			<Row>
				<Col md={6} className='game-form'>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="game-title">
							<Form.Label>Title</Form.Label>
							<Form.Control type="text" placeholder="insert game title..." name="title" onChange={handleChange} value={game.title} />
						</Form.Group>

						<Form.Select aria-label="Game Category" name="category" onChange={handleChange}>
							<option>Select the category</option>
							<option value="war">War</option>
							<option value="race" >Race</option>
							<option value="action">Action</option>
						</Form.Select>

						<Form.Group className="mb-3" controlId="game-price">
							<Form.Label>Price</Form.Label>
							<Form.Control type="number" placeholder="game price..." name="price" onChange={handleChange} value={game.price} />
						</Form.Group>

						<Form.Group className="mb-3" controlId="game-discount">
							<Form.Label>Discount</Form.Label>
							<Form.Control type="number" placeholder="game discount..." name="discount" onChange={handleChange} value={game.discount} />
						</Form.Group>

						<Form.Group className="mb-3" controlId="game-description">
							<Form.Label>Example description</Form.Label>
							<Form.Control as="textarea" rows={3} onChange={handleChange} name="description" value={game.description} />
						</Form.Group>


						<Form.Group className="mb-3" controlId="game-image">
							<Form.Label>Image</Form.Label>
							<Form.Control type="file" placeholder="game images..." name="image" onChange={handleChange} value={game.image} />
						</Form.Group>

						<Button variant="primary" type="submit">Create Game</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}

export default Game;
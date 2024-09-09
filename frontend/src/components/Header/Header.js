import { Navbar, Container, Nav } from 'react-bootstrap';
import "./Header.css";
import logo_brand from "../../images/logo.png";
import hbt_logo from "../../images/Holberton-School-Albania-white-fog.png";
export default function Header() {
	return (
		<>
			<header className="custom_header">
				<Navbar bg="primary" data-bs-theme="dark" fixed="top">
					<Container>
						<Navbar.Brand href="#home">
							<img src={hbt_logo} alt='this is the logo' style={{ width: "130px" }} />
						</Navbar.Brand>
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
						</Nav>
					</Container>
				</Navbar>
				<div className="header-info">
					<h4>our shop</h4>
				</div>
			</header>
		</>
	)
}
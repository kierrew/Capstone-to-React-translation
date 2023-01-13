import "./layout.css";
import { UserAuth } from "../../Controller/Auth";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CustomNavbar from "../../Model/Components/navbar";

const HomeScreen = () => {
	const { user, logout } = UserAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logout();
			navigate('/');
			console.log('BYEEEEEE!');
		} catch (e) {
			console.log(e.message)
		}
	}

	return (
		<div className="App">
			<CustomNavbar />
			<Col>
			</Col>
			<Col>
				<header className="App-header">
					<h1>
						You made it in!
					</h1>
					<p>
						User Email: {user && user.email}
					</p>
					<p>
						Uid: {user && user.uid}
					</p>
					<Button onClick={handleLogout}>Logout</Button>
				</header>
			</Col>
		</div>
	);
};

export default (HomeScreen);


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
			<Navbar bg='light' expand="lg">
				<Container>
					<Navbar.Brand href="home">Home</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown title="Menu" id="basic-nav-dropdown">
								<NavDropdown.Item
									href="debts"
								>Debts</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/transactions">
									Transactions
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/savings">
									Savings
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/templates">
									BudgetTemplates
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/accounts">
									Accounts
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/tools">
									Tools
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/plans">
									Plans
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/profile">
									My Profile
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/users">
									User List
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/wallet">
									My Wallet
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/exchange">
									Currency Exchange
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item
									onClick={handleLogout}
								>
									Logout
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
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
					<Button onClick={handleLogout}>Logout</Button>
				</header>
			</Col>
		</div>
	);
};

export default (HomeScreen);
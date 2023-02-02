import React, { useState } from "react";
import "./layout.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserAuth } from "../Controller/Auth";
import { useNavigate } from "react-router-dom";

function SignInScreen() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const { signIn } = UserAuth();
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await signIn(email, password);
			navigate('/home');
		} catch (e) {
			setError(e.massage);
			console.log(error)
		}
	}

	const signUp = () => {
		navigate('/signup')
	}

	return (
		<div className="App">
			<header className="App-header">
				<p>
					Welcome to the Budget App please sign in
				</p>
				<form onSubmit={handleSubmit}>
					<p>
						<input
							name="email"
							type="email"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</p>
					<p>
						<input
							name="password"
							type="password"
							placeholder="Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</p>
					<p>
						<Button variant="secondary" type="submit">Sign in</Button>
					</p>
				</form>
				<p>
					<Button variant="secondary" onClick={signUp}>New User? Click here.</Button>
				</p>
			</header>
		</div>
	);
}

export default SignInScreen;
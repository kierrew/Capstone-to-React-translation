import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./layout.css";
import { UserAuth } from "../Controller/Auth";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpScreen = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const { createUser } = UserAuth();
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await createUser(email, password);
			navigate('/home')
		} catch (e) {
			setError(e.message);
			console.log(error)
		}
	};

	const signIn = () =>{
		navigate('/')
	}

	return (
		<div className="App">
			<header className="App-header">
			<h1>Sign up</h1>
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
					<Button variant="secondary" type="submit">Create Account</Button>
					</p>
				</form>
				<p>
						<Button variant="secondary" onClick={signIn}>Returning user? Sign in.</Button>
					</p>
			</header>
		</div>
	);
};

export default (SignUpScreen);
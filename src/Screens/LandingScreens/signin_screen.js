import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Controller/Auth";
import ".././layout.css";

function SignInScreen() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { signIn } = UserAuth();
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signIn(email, password);
			navigate('/home');
		} catch (e) {
			alert("Username and/or Password is invalid. \n Please try again.")
		}
	}

	const signUp = () => {
		navigate('/signup')
	}

	return (
		<div className="App">
			<body
				className="App-body">
				<p>
					Welcome to the Budget App please sign in
				</p>
				<form
					onSubmit={handleSubmit}>
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
						<Button
							variant="secondary"
							size="lg"
							type="submit">
							Sign in
						</Button>
					</p>
				</form>
				<p>
					<Button
						variant="secondary"
						size="lg"
						onClick={signUp}>
						New User? Click here.
					</Button>
				</p>
			</body>
		</div>
	);
}

export default SignInScreen;

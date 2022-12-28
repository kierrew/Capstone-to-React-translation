//import React from "react";
import "./layout.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignInScreen() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
					Welcome to the Budget App please sign in
				</p>
				<input
					type={"text"}
				/>
				<p>e-mail</p>
				<input
					type={"text"}
				/>
				<p>
					password
				</p>
				<p>
					<Button>Sign in</Button>
				</p>
				<p>
					<Button>New User? Click here.</Button>
				</p>
			</header>
		</div>
	);
}

export default SignInScreen;
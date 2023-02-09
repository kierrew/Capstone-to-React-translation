import React, { useEffect, useRef, useState } from 'react'
import CustomNavbar from "../../Model/Components/navbar";
import Button from 'react-bootstrap/Button';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { query, collection, onSnapshot, QuerySnapshot, where, getDocs, connectFirestoreEmulator, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate, useParams } from "react-router-dom";

const AddDebtScreen = () => {
	const [title, setTitle] = useState('')
	const [limit, setLimit] = useState('')
	const [balance, setBalance] = useState('')
	const [interest, setInterest] = useState('')
	const [category, setCategory] = useState('')
	const auth = getAuth();
	const navigate = useNavigate()
	let uid = useRef({});
	let emailAdd = useRef({});
	let { keyCode } = useParams();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser);
			uid.current = currentUser.uid
			emailAdd.current = currentUser.email
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const createDebt = async (e) => {
		e.preventDefault(e)
		console.log(keyCode)
		if (validateTitle(title) === false) {
			alert("Title too short")
			return
		}
		if (validateLimit(limit) === false) {
			alert("Limit too small")
			return
		}
		if (validateBalance(balance) === false) {
			alert("Balance too low")
			return
		}
		if (validateInterest(interest) === false) {
			alert("Interest too low")
			return
		}

		await addDoc(collection(db, 'Users',
			keyCode, 'Debts'), {
			title: title,
			balance: balance,
			category: category,
			original: limit,
			interest: interest,
			createby: emailAdd.current
		});
		navigate('/debts')
	}

	const validateTitle = (e) => {
		if (e == null || e.trim().length < 2) {
			return false;
		} else {
			return true
		}
	}

	const validateLimit = (e) => {
		if (e != null) {
			var bal = parseFloat(e);
			if (bal < 100) {
				return false
			} else {
				return true
			}
		}
	}

	const validateBalance = (e) => {
		if (e != null) {
			var bal = parseFloat(e);
			if (bal < 1.00) {
				return false
			} else {
				return true
			}
		}
	}

	const validateInterest = (e) => {
		if (e != null) {
			var bal = parseFloat(e);
			if (bal < 1.00) {
				return false
			} else {
				return true
			}
		}
	}


	return (
		<div
			className="App">
			<CustomNavbar />
			<header
				className="App-header">
				Add New Debt
			</header>
			<body
				className='App-body'>
				<p>
					Please enter the informationof your new debt.
				</p>
				<form
					onSubmit={createDebt}>
					<p>
						<input
							name="Ttile"
							placeholder="Debt Title"
							onChange={(e) => setTitle(e.target.value)}
						/>
					</p>
					<p>
						<input
							name="Original"
							placeholder="Loan amnt or Credit limit"
							onChange={(e) => setLimit(e.target.value)}
						/>
					</p>
					<p>
						<input
							name="Balance"
							placeholder="Balance"
							onChange={(e) => setBalance(e.target.value)}
						/>
					</p>
					<p>
						<input
							name="Intrest"
							placeholder="Interest Rate"
							onChange={(e) => setInterest(e.target.value)}
						/>
					</p>
					<p>
						<label for="Category">Category</label></p>
					<p>
						<select name="Categories" id="cats" onChange={() => setCategory(document.getElementById('cats').value)}>
							<option value="" disabled selected hidden>Select Category</option>
							<option value="Mortgage">Mortgage</option>
							<option value="Car loan">Auto Loan</option>
							<option value="Credit Card">Credit Card</option>
							<option value="Medical Bill">Medical Bill</option>
						</select>
					</p>
					<p>
						<Button
							variant="secondary"
							size="lg"
							type="submit">
							Add Debt
						</Button>
					</p>
				</form>
			</body>
		</div>
	)
}

export default AddDebtScreen
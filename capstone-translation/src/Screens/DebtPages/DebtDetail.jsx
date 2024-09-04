import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router';
import CustomNavbar from '../../Components/navbar';
import { db } from '../../firebase';




const DebtDetailScreen = () => {
	

	let { debtTitle } = useParams();
	let { debtBalance } = useParams();
	let { debtCategory } = useParams();
	let { debtID } = useParams();
	let { debtInterest } = useParams();
	let { debtOriginal } = useParams();
	let { keyCode } = useParams();
	const navigate = useNavigate()
	const [editable, setEditable] = useState(true)
	const [title, setTitle] = useState(debtTitle)
	const [limit, setLimit] = useState(debtOriginal)
	const [balance, setBalance] = useState(debtBalance)
	const [interest, setInterest] = useState(debtInterest)
	const [category, setCategory] = useState(debtCategory)
	let update = false



	const updateDebt = async (e) => {
		e.preventDefault(e)
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
		if (title != debtTitle) {
			update = true
		} if (limit != debtOriginal) {
			update = true
		} if (balance != debtBalance) {
			update = true
		} if (interest != debtInterest) {
			update = true
		} if (category != debtCategory) {
			update = true
		} if (update == true) {
			await updateDoc(doc(db, 'Users', keyCode, 'Debts', debtID), {
				title: title,
				balance: balance,
				category: category,
				original: limit,
				interest: interest,
			})
		}
		setEditable(!editable)
		navigate('/debts')
	}

	const setEdit = () => {
		setEditable(!editable)
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

	const payoff = () => {
		navigate('/debtPayoff/' + title + '/' +
			interest + '/' +
			balance + '/' +
			limit + '/' +
			category)
	}

	return (
		<div
			className="App">
			<CustomNavbar />
			<header
				className="App-header">
				Debt Details
			</header>
			<body
				className='App-body'>
				<p>
					Here are the details of the selected debt.
				</p>
				<form
					onSubmit={updateDebt}>
					<p>
						<label>Debt title</label>
					</p>
					<p>
						<input
							disabled={editable}
							name="Ttile"
							value={debtTitle}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</p>
					<p>
						<label>Debt limit or original value</label>
					</p>
					<p>
						<input
							disabled={editable}
							name="Original"
							value={debtOriginal}
							onChange={(e) => setLimit(e.target.value)}
						/>
					</p>
					<p>
						<label>Debt balance</label>
					</p>
					<p>
						<input
							disabled={editable}
							name="Balance"
							value={debtBalance}
							onChange={(e) => setBalance(e.target.value)}
						/>
					</p>
					<p>
						<label>Debt interest rate</label>
					</p>
					<p>
						<input
							disabled={editable}
							name="Intrest"
							value={debtInterest}
							onChange={(e) => setInterest(e.target.value)}
						/>
					</p>
					<p>
						<label for="Category">Category</label></p>
					<p>
						<select
							name="Categories"
							id="cats"
							onChange={() => setCategory(document.getElementById('cats').value)}
							disabled={editable}>
							<option value="" disabled selected hidden>{debtCategory}</option>
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
							onClick={setEdit}>
							Edit Debt
						</Button>
					</p>
					<p>
						<Button
							variant="secondary"
							size="lg"
							type="submit">
							Save Debt
						</Button>
					</p>
					<p>
						<Button
							variant="secondary"
							size="lg"
							onClick={payoff}>
							Payoff Schedule
						</Button>
					</p>
				</form>
			</body>
		</div>
	)
}

export default DebtDetailScreen

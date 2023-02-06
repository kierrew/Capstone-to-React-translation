import React, { useEffect, useRef, useState } from 'react'
import CustomNavbar from "../../Model/Components/navbar";
import { useParams } from 'react-router';
import Debt from '../../Model/debt';
import Button from 'react-bootstrap/Button';



const DebtDetailScreen = () => {
	const [title, setTitle] = useState('')
	const [limit, setLimit] = useState('')
	const [balance, setBalance] = useState('')
	const [interest, setInterest] = useState('')
	const [category, setCategory] = useState('')
	let { debtTitle } = useParams();
	let { debtBalance } = useParams();
	let { debtCategory } = useParams();
	let { debtID } = useParams();
	let { debtInterest } = useParams();
	let { debtOriginal } = useParams();
	let { keyCode } = useParams();
	const [editable, setEditable] = useState(true)

	const createDebt = () => {
		console.log(debtTitle)
		console.log(debtInterest)
		console.log(debtBalance)
		console.log(debtID)
		console.log(debtCategory)
		console.log(debtOriginal)
		console.log(keyCode)
	}

	const setEdit = () => {
		setEditable(!editable)		
	}

	return (
		<div className="App">
			<CustomNavbar />
			<header className="App-header">
				Debt Details
			</header>
			<body className='App-body'>
				<p>
					Here are the details of the selected debt.
				</p>
				<form onSubmit={createDebt}>
					<p>
						<label>Debt title</label>
					</p>
					<p>
						<input
							disabled={editable}
							name="Ttile"
							placeholder={debtTitle}
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
							placeholder={debtOriginal}
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
							placeholder={debtBalance}
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
							placeholder="Interest Rate"
							onChange={(e) => setInterest(e.target.value)}
						/>
					</p>
					<p>
						<label for="Category">Category</label></p>
					<p>
						<select name="Categories" id="cats" onChange={() => setCategory(document.getElementById('cats').value)}
						disabled={editable}>
							<option value="" disabled selected hidden>{debtCategory}</option>
							<option value="Mortgage">Mortgage</option>
							<option value="Car loan">Auto Loan</option>
							<option value="Credit Card">Credit Card</option>
							<option value="Medical Bill">Medical Bill</option>
						</select>
					</p>
					<p>
						<Button variant="secondary" onClick={setEdit}>Edit Debt</Button>
					</p>
					<p>
						<Button variant="secondary" type="submit">Save Debt</Button>
					</p>
				</form>
			</body>
		</div>
	)
}

export default DebtDetailScreen
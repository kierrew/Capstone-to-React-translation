import React from 'react'
import CustomNavbar from "../../Model/Components/navbar";
import { useParams, useNavigate } from 'react-router';


const DebtPayoffScreen = () => {
	let { debtTitle } = useParams();
	let { debtBalance } = useParams();
	let { debtInterest } = useParams();
	let { debtOriginal } = useParams();

	return (
		<div>
			<CustomNavbar />
			DebtPayoffScreen
		</div>
	)
}

export default DebtPayoffScreen
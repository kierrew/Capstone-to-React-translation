import React, { useState } from 'react'
import { db } from '../firebase';
import { Card } from 'react-bootstrap';




const Debt = ({ debt }) => {
	console.log(debt)
	console.log(debt.original / debt.balance * 10)
	let textColor = ""

	debt.balance / debt.original * 100 > 75 ? textColor = "danger" :
		debt.balance / debt.original * 100 > 50 ? textColor = "warning " :
			debt.balance / debt.original * 100 > 25 ? textColor = "success" : textColor = "info"


	return (
		<Card
			text={textColor}
			style={{ width: '600px' }}>
			<Card.Body>
				<Card.Title>{debt.title}</Card.Title>
				<i class="fa-solid fa-house"></i>
				<Card.Text>
					{debt.category}
				</Card.Text>
			</Card.Body>
		</Card >
	)
}

export default Debt
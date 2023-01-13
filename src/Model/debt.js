import React, { useState } from 'react'
import { db } from '../firebase';

const Debt = ({ debt }) => {
	return (
		<div>
			<p>
			{debt.title}
			</p>
		</div>
	)
}

export default Debt
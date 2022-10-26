import React, { useState } from 'react';
import Board from './Board';
import Button from './button/Button';
export default function Game({ }) {
	const [showSolution, setShowSolution] = useState(false);
	return (
		<div className="game">

			<Board isSolution={showSolution}></Board>

			<div className="button-container">

				<Button>Shuffle</Button>
				<Button onClick={() => { setShowSolution(!showSolution) }}>{showSolution ? 'Hide' : 'Show'} solution</Button>
			</div>
		</div>
	)
}
import React, { useState } from 'react';
import Board from './Board';
import Button from './button/Button';
export default function Game() {
	const [showSolution, setShowSolution] = useState(false);
	const [pseudoSeed, setPseudoSeed] = useState(false);
	return (
		<div className="game">

			<Board isSolution={showSolution} pseudoSeed={pseudoSeed}></Board>

			<div className="button-container">

				<Button onClick={() => { setPseudoSeed(!pseudoSeed) }}>Shuffle</Button>
				<Button onClick={() => { setShowSolution(!showSolution) }}>{showSolution ? 'Hide' : 'Show'} solution</Button>
			</div>
		</div>
	)
}
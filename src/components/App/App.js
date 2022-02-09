import { useState } from 'react';
import './App.css';
import Board from '../Board';

function App() {
	const [turn, setTurn] = useState('X');
	const changeTurn = () => {
		if (turn === 'X') {
			setTurn('O');
			return;
		}
		setTurn('X');
	};
	return (
		<div className='App'>
			<Board changeTurn={changeTurn} turn={turn} />
		</div>
	);
}

export default App;

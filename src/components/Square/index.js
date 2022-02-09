import React from 'react';
import './Square.css';
function Square(props) {
	const squareClickHandler = (e) => {
		console.log(props.status);
		if (props.status === null) {
			props.changeSquare(e.target.id, props.turn);
		} else {
			console.log('Square already changed.');
		}
	};
	return (
		<div onClick={squareClickHandler} className='square' id={props.id}>
			{props.status && props.status}
		</div>
	);
}

export default Square;

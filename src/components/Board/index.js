import React, { useState, useEffect } from 'react';
import Square from '../Square';

import './board.css';

// work on a reset function and a new round button - when button is click, revert everything to default
// display winner
// display overall score - score that persists across rounds
// work on board design (maybe we can use a card or image for x and o)

function Board(props) {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [winner, setWinner] = useState('');

  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  const changeBoardSquare = (index, newValue) => {
    const newBoard = [...board];
    newBoard[index] = newValue;
    props.changeTurn();
    setBoard(newBoard);
    checkGameStatus();
  };
  const checkGameStatus = () => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winConditions.forEach((element, index) => {
      if (
        board[element[0]] === board[element[1]] &&
        board[element[1]] === board[element[2]] &&
        board[element[0]] !== null
      ) {
        setWinner(board[element[0]]);
      }
    });
    const freeSquareId = board.findIndex((el) => el === null);
    if (freeSquareId === -1) {
      console.log('Game ends in a draw!');
    }
  };

  useEffect(() => {
    if (winner === 'X') {
      setScoreX(scoreX + 1);
    } else if (winner === 'O') {
      setScoreO(scoreO + 1);
    }
  }, [winner]);

  useEffect(checkGameStatus, [checkGameStatus]);

  return (
    <div className="board">
      {winner != '' && <h1>Game Over! Winner is {winner}</h1>}
      {board.map((el, index) => {
        return (
          <Square
            changeSquare={changeBoardSquare}
            id={index}
            key={index}
            turn={props.turn}
            status={el}
          />
        );
      })}
      <h2>
        Team X = {scoreX}, Team O = {scoreO}
      </h2>
      <button
        onClick={() => {
          setBoard([null, null, null, null, null, null, null, null, null]);
          setWinner('');
        }}
      >
        Next Round
      </button>
      <button
        onClick={() => {
          setBoard([null, null, null, null, null, null, null, null, null]);
          setWinner('');
          setScoreX(0);
          setScoreO(0);
        }}
      >
        Reset Game
      </button>
    </div>
  );
}

export default Board;

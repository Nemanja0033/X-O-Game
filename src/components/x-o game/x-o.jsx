import React, { useState } from "react";
import circle_icon from '../../assets/circle.png';
import cross_icon from '../../assets/cross.png';
import '../x-o game/x-o.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [isXNext, setIsXNext] = useState(true);
    const [lock, setLock] = useState(false);

    const handleClick = (index) => {
        if (board[index] || lock) return;

        const newBoard = board.slice();
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);

        // Check for a winner or a tie
        const winner = calculateWinner(newBoard);
        if (winner) {
            setLock(true);
            alert(`${winner} wins!`);
        } else if (!newBoard.includes("")) {
            setLock(true);
            alert("It's a tie!");
        } else {
            setIsXNext(!isXNext);
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(""));
        setIsXNext(true);
        setLock(false);
    };

    const renderBox = (index) => {
        return (
            <div
                className="boxes"
                onClick={() => handleClick(index)}
            >
                {board[index] === "X" && <img src={cross_icon} alt="X" />}
                {board[index] === "O" && <img src={circle_icon} alt="O" />}
            </div>
        );
    };

    return (
        <div>
            <div className="container">
                <h1 className="title">X-O GAME</h1>
                <button className="reset" onClick={resetGame}>Reset</button>
                <br /><br />
                <div className="board">
                    <div className="row">
                        {renderBox(0)}
                        {renderBox(1)}
                        {renderBox(2)}
                    </div>
                    <div className="row">
                        {renderBox(3)}
                        {renderBox(4)}
                        {renderBox(5)}
                    </div>
                    <div className="row">
                        {renderBox(6)}
                        {renderBox(7)}
                        {renderBox(8)}
                    </div>
                </div>
            </div>
        </div>
    );
};


const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default Game;

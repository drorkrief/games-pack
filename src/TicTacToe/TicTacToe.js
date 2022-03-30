import React, { useState } from "react";
import "./TicTacToe.css";
export const TicTacToe = () => {
  const [player, setPlayer] = useState("x");
  const [winner, setWinner] = useState();
  const [playerType, setPlayerType] = useState("single");
  const [gameStatus, setGameStatus] = useState(Array(9).fill(""));

  const changeGameType = () => {
    if (playerType === "single") {
      setPlayerType("multi");
    } else if (playerType === "multi") {
      setPlayerType("single");
    }
    setGameStatus(Array(9).fill(""));
    setWinner(null);
    setPlayer("x");
    // console.log(234);
  };
  const makeAMove = (board) => {
    if (player === "x") {
      // var tempstatus = [...gameStatus];
      var random = Math.floor(Math.random() * 9);
      for (let i = 0; i < gameStatus.length; i++) {
        if (board[random] === "") {
          board[random] = "o";
          // setGameStatus(tempstatus);
          return board;
        } else{
          random = Math.floor(Math.random() * 9);
          // console.log(random,"random");
        }
      //   console.log("d");
      }
      // console.log(board);
    }
    return 2;
  };
  const clickHandle = (cellNum) => {
    if (gameStatus[cellNum] !== "" || winner) {
      return;
    }
    let board = [...gameStatus];
    if (player === "x") {
      playerType === "multi" && setPlayer("o");
    } else if (player === "o") {
      setPlayer("x");
    }
    board[cellNum] = player;
    if (playerType === "single") {
      setGameStatus(makeAMove(board))
      // makeAMove(board);
    }
    setGameStatus(board);
    checkWinner(board);
  };
  const resetGame = () => {
    setGameStatus(Array(9).fill(""));
    setWinner(null);
    setPlayer("x");
  };
  const checkWinner = (board) => {
    const optionsToWin = {
      row: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      line: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      slant: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let option in optionsToWin) {
      optionsToWin[option].forEach((element) => {
        if (
          board[element[0]] === "" ||
          board[element[1]] === "" ||
          board[element[2]] === ""
        ) {
          //there is no winner
        } else if (
          board[element[0]] === board[element[1]] &&
          board[element[1]] === board[element[2]]
        ) {
          setWinner(board[element[0]]);
        }
      });
    }
  };
  const Cell = ({ cellNum }) => {
    return (
      <div
        onClick={() => {
          clickHandle(cellNum);
        }}
        className="content"
      >
        {gameStatus[cellNum]}
      </div>
    );
  };
  return (
    <>
      <button onClick={() => changeGameType()}>{playerType} player</button>
      <p>player: {player}</p>
      <div>TicTacToe</div>
      <div className="wrapper">
        <div className="continer">
          <Cell cellNum={0} />
          <Cell cellNum={1} />
          <Cell cellNum={2} />
          <Cell cellNum={3} />
          <Cell cellNum={4} />
          <Cell cellNum={5} />
          <Cell cellNum={6} />
          <Cell cellNum={7} />
          <Cell cellNum={8} />
        </div>
      </div>
      {winner && (
        <>
          <p>teh winner is {winner}</p>
          <button onClick={() => resetGame()}>reset the game</button>
        </>
      )}
    </>
  );
};

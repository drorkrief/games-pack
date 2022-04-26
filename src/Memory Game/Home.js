import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div>
        <h1>Welcome to GamePark!</h1>
      </div>

      <p style={{ fontSize: "3vw", color: "gray" }}>
        In this website I present my last project in React.js
      </p>
      <h2 style={{ color: "gray" }}>portfilio</h2>
      <h3 style={{ color: "gray" }}>Tic Tac Toe</h3>
      <p
        style={{
          fontSize: "3vw",
          padding: "0 20vw",
          textAlign: "left",
          color: "gray",
        }}
      >
        in{" "}
        <Link style={{ color: "gray" }} to="/tictactoe">
          Tic Tac Toe
        </Link>{" "}
        game, you can play as a single player or as multiple players. the main
        goal is to sign three X's in a raw.
      </p>
      <h3 style={{ color: "gray" }}>Memory Cards</h3>
      <p
        style={{
          fontSize: "3vw",
          padding: "0 20vw",
          textAlign: "left",
          color: "gray",
        }}
      >
        in{" "}
        <Link style={{ color: "gray" }} to="/memorycardsgame">
          Memory Cards{" "}
        </Link>{" "}
        you can flip cards as much as you wish. but pay attention for the count!{" "}
        <br /> because any time you flip the wrong match the counter count and
        your score is decreased.
      </p>
    </>
  );
};

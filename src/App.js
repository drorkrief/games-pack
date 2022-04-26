import "./App.css";
import { Routes, Route, Link, HashRouter } from "react-router-dom";
import { MemoryCardsGame } from "./Memory Game/MemoryCardsGame";
// import { MemoryGame } from "./Memory Game/MemoryGame";
import { TicTacToe } from "./TicTacToe/TicTacToe";
import { NoMatch } from "./Memory Game/NoMatch";
import { Home } from "./Memory Game/Home";
function App() {
  return (
    <HashRouter basename="/">
    <div className="App">
      <main
        style={{
          display: "flex",
          gap: "2vw",
          justifyContent: "start",
          background: "silver",
          lineHeight: "30px",
          paddingLeft: "20px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/tictactoe">TicTacToe</Link>

        <Link to="/memorycardsgame">MemoryCardsGame</Link>
      </main>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tictactoe" element={<TicTacToe />} />
        <Route exact path="/memorycardsgame" element={<MemoryCardsGame />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* <h1>Tic Tac Toe</h1>
    <TicTacToe/> */}
      {/* <hr/> */}
      {/* <MemoryGame/> */}
      {/* <MemoryCardsGame/> */}
    </div></HashRouter>
  );
}

export default App;

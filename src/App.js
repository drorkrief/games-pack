import "./App.css";
import { MemoryCardsGame } from "./Memory Game/MemoryCardsGame";
// import { MemoryGame } from "./Memory Game/MemoryGame";
import { TicTacToe } from "./TicTacToe/TicTacToe";
function App() {
  
  return (
    <div className="App">
    <h1>Tic Tac Toe</h1>
    {/* <TicTacToe/> */}
    <hr/>
    {/* <MemoryGame/> */}
    <MemoryCardsGame/>
    </div>
  );
}

export default App;

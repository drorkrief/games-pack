import "./App.css";
import { MemoryGame } from "./Memory Game/MemoryGame";
import { TicTacToe } from "./TicTacToe/TicTacToe";
function App() {
  
  return (
    <div className="App">
    <h1>Tic Tac Toe</h1>
    <TicTacToe/>
    <hr/>
    <MemoryGame/>
    </div>
  );
}

export default App;

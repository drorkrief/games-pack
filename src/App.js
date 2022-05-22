import "./App.css";
import { Routes, Route, Link, HashRouter } from "react-router-dom";
import { MemoryCardsGame } from "./Memory Game/MemoryCardsGame";
// import { MemoryGame } from "./Memory Game/MemoryGame";
import { TicTacToe } from "./TicTacToe/TicTacToe";
import { NoMatch } from "./Memory Game/NoMatch";
import { Home } from "./Memory Game/Home";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
function App() {
  const [dataYnet, setdataYnet] = useState(false);
  useEffect(() => {
    fetch("https://www.ynet.co.il/iphone/json/api/auto_ticker/6QMCMRP1V")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data =>{
        setdataYnet(data.data[1])
      })
      .catch((err) => {
        setdataYnet(err);
      })
      .finally(() => {
        console.log("ok!");
      });
  }, []);
  console.log(dataYnet);
  return (
    <HashRouter basename="/">

      <div className="App">
      <Helmet><title>adf</title>
        {dataYnet&&
    <title>{dataYnet.title}</title>}
    {dataYnet&&<meta property="og:title" content={dataYnet.title} />}
    {dataYnet&&<meta property="og:description" content={dataYnet.textToShow} />}
    {dataYnet&&<meta property="og:image" content={dataYnet.promotionImageDetails.url} />}
 </Helmet>
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
      </div>
    </HashRouter>
  );
}

export default App;

import React, { useState } from "react";

export const MemoryGame = () => {
  const [cards, setCards] = useState(
    [
      { id: 1, img: "/imgs/Duck.png", current: "" },
      { id: 1, img: "/imgs/cat.png", current: "" },
      { id: 2, img: "", current: "" },
      { id: 2, img: "", current: "" },
      { id: 3, img: "", current: "" },
      { id: 3, img: "", current: "" },
      { id: 4, img: "", current: "" },
      { id: 4, img: "", current: "" },
      { id: 5, img: "", current: "" },
      { id: 5, img: "", current: "" },
      { id: 6, img: "", current: "" },
      { id: 6, img: "", current: "" },
      { id: 7, img: "", current: "" },
      { id: 7, img: "", current: "" },
      { id: 8, img: "", current: "" },
      { id: 8, img: "", current: "" },
      { id: 9, img: "", current: "" },
      { id: 9, img: "", current: "" },
      { id: 10, img: "", current: "" },
      { id: 10, img: "", current: "" },
    ].sort(() => (Math.random() > 0.5 ? 1 : -1))
  );
  return (
    <>
      <div>MemoryGame</div>
      {cards.map((item, index) => (
        <div key={`key${index}`}>
          <img src={window.location.origin + "/imgs/Chick.png"} alt="pic" />
        </div>
      ))}
    </>
  );
};

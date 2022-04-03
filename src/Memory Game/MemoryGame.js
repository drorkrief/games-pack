import React, { useState } from "react";
import Card from "./Card";
import "./MemoryGame.css";

export const MemoryGame = () => {
  const [cards, setCards] = useState(
    [
      { id: 1, img: "/images/Duck.png", current: "" },
      { id: 1, img: "/images/Duck.png", current: "" },
      { id: 2, img: "/images/Chick.png", current: "" },
      { id: 2, img: "/images/Chick.png", current: "" },
      { id: 3, img: "/images/Crocodile.png", current: "" },
      { id: 3, img: "/images/Crocodile.png", current: "" },
      { id: 4, img: "/images/cat.png", current: "" },
      { id: 4, img: "/images/cat.png", current: "" },
      { id: 5, img: "/images/dog.png", current: "" },
      { id: 5, img: "/images/dog.png", current: "" },
      { id: 6, img: "/images/Fox.png", current: "" },
      { id: 6, img: "/images/Fox.png", current: "" },
      { id: 7, img: "/images/Horse.png", current: "" },
      { id: 7, img: "/images/Horse.png", current: "" },
      { id: 8, img: "/images/Koala.png", current: "" },
      { id: 8, img: "/images/Koala.png", current: "" },
      { id: 9, img: "/images/Penguin.png", current: "" },
      { id: 9, img: "/images/Penguin.png", current: "" },
      { id: 10, img: "/images/Wolf.png", current: "" },
      { id: 10, img: "/images/Wolf.png", current: "" },
    ].sort(() => (Math.random() > 0.5 ? 1 : -1))
  );
  return (
    <>
      <div>MemoryGame</div>
      <div className="mamoContainer">

      {cards.map((item, index) => (
          <div  key={`key${index}`}>
            <Card item={item}/>
          {/* <img src={process.env.PUBLIC_URL +item.img} alt="pic" width="90px"/> */}
        </div>
      ))}
      </div>
    </>
  );
};

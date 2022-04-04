import React, { useState } from "react";
import Card from "./Card";
import "./MemoryGame.css";

export const MemoryGame = () => {
  const [cards, setCards] = useState(
    [
      { id: 1, group: 1, img: "/images/Duck.png", current: "" },
      { id: 2, group: 1, img: "/images/Duck.png", current: "" },
      { id: 3, group: 2, img: "/images/Chick.png", current: "" },
      { id: 4, group: 2, img: "/images/Chick.png", current: "" },
      { id: 5, group: 3, img: "/images/Crocodile.png", current: "" },
      { id: 6, group: 3, img: "/images/Crocodile.png", current: "" },
      { id: 7, group: 4, img: "/images/cat.png", current: "" },
      { id: 8, group: 4, img: "/images/cat.png", current: "" },
      { id: 9, group: 5, img: "/images/dog.png", current: "" },
      { id: 10, group: 5, img: "/images/dog.png", current: "" },
      { id: 11, group: 6, img: "/images/Fox.png", current: "" },
      { id: 12, group: 6, img: "/images/Fox.png", current: "" },
      { id: 13, group: 7, img: "/images/Horse.png", current: "" },
      { id: 14, group: 7, img: "/images/Horse.png", current: "" },
      { id: 15, group: 8, img: "/images/Koala.png", current: "" },
      { id: 16, group: 8, img: "/images/Koala.png", current: "" },
      { id: 17, group: 9, img: "/images/Penguin.png", current: "" },
      { id: 18, group: 9, img: "/images/Penguin.png", current: "" },
      { id: 19, group: 10, img: "/images/Wolf.png", current: "" },
      { id: 20, group: 10, img: "/images/Wolf.png", current: "" },
    ].sort(() => (Math.random() > 0.5 ? 1 : -1))
  );
  const clickHandle = (parameter) => {
    let temp = [...cards];
    let tempId = temp.findIndex((obj) => obj.id === parameter);
    if (temp[tempId].current !== "") {
      return;
    }
    let active = temp.findIndex((obj) => obj.current === "check");
    if (active !== -1) {
      console.log(active, "active");
      console.log(tempId,"tempId");
      if (temp[tempId].group === temp[active].group) {
        console.log("ok");
        temp[tempId].current = "fit";
        temp[active].current = "fit";
      } else {
        console.log("no");
        temp[tempId].current = "check";
      }
    } else{

        temp[tempId].current = "check";
    }
    console.log(tempId);
    setCards(temp);
    //   console.log(parameter);
  };
  return (
    <>
      <div>MemoryGame</div>
      <div className="mamoContainer">
        {cards?.map((item, index) => (
          <div key={`key${index}`}>
            <Card clickHandle={clickHandle} item={item} />
            {/* <img src={process.env.PUBLIC_URL +item.img} alt="pic" width="90px"/> */}
          </div>
        ))}
      </div>
    </>
  );
};

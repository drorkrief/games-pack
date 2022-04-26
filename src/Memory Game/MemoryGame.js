import React, { useState } from "react";
import Card from "./Card1";
import "./MemoryGame.css";

export const MemoryGame = () => {
  // let cardsList =["Duck","Chick","Crocodile","cat","dog","Fox","Horse","Koala","Penguin","Wolf"];
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
    let temp = [...cards]; // copy of cards state
    if (parameter === null) {
      setTimeout(() => {
        console.log("null");
        var resetNoMatch = temp.forEach((x) => {
          if (x.current === "noMatch") {
            x.current = "";
          }
          console.log(resetNoMatch);
        });
        return;
      }, 100);
    }
    let currentIndex = temp.findIndex((obj) => obj.id === parameter); // find the index of current item by id
    if (temp[currentIndex].current !== "") {
      // if current card is check or fit => do nothing!
      return;
    }
    // else => current item deen to check => is there match or no match or it the first try
    let active = temp.findIndex((obj) => obj.current === "check"); // index of "check" card if any exist
    if (active !== -1) {
      // if there is a check card
      // console.log(active, "active");
      // console.log(currentIndex, "currentIndex");
      if (temp[currentIndex].group === temp[active].group) {
        // if is there a match => both will be fit
        // console.log("ok");
        temp[currentIndex].current = "fit";
        temp[active].current = "fit";
      } else {
        // there is no match
        // console.log("no");
        temp[currentIndex].current = "noMatch";
        temp[active].current = "noMatch";
      }
    } else {
      // this is first choice or the first after fit
      temp[currentIndex].current = "check";
    }
    // console.log(currentIndex);
    setCards(temp);
    //   console.log(parameter);
  };
  const resetGame = () => {
    setCards(
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
  };
  return (
    <>
      <div>MemoryGame</div>
      <button onClick={resetGame}>reset</button>
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

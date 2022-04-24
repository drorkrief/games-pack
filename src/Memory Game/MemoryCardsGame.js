import React, { useCallback, useState } from "react";
import { Card } from "./Card";
import "./MemoryCardsGame.css";
export const MemoryCardsGame = () => {
  const [clicked, setlicked] = useState(0);
  // const [check, setCheck] = useState();

  let cardsList = [
    { id: 1, name: "Duck", statusCard: "" },
    { id: 2, name: "Duck", statusCard: "" },
    { id: 3, name: "Chick", statusCard: "" },
    { id: 4, name: "Chick", statusCard: "" },
    { id: 5, name: "Crocodile", statusCard: "" },
    { id: 6, name: "Crocodile", statusCard: "" },
    { id: 7, name: "cat", statusCard: "" },
    { id: 8, name: "cat", statusCard: "" },
    { id: 9, name: "dog", statusCard: "" },
    { id: 10, name: "dog", statusCard: "" },
    { id: 11, name: "Fox", statusCard: "" },
    { id: 12, name: "Fox", statusCard: "" },
    { id: 13, name: "Horse", statusCard: "" },
    { id: 14, name: "Horse", statusCard: "" },
    { id: 15, name: "Koala", statusCard: "" },
    { id: 16, name: "Koala", statusCard: "" },
    { id: 17, name: "Penguin", statusCard: "" },
    { id: 18, name: "Penguin", statusCard: "" },
    { id: 19, name: "Wolf", statusCard: "" },
    { id: 20, name: "Wolf", statusCard: "" },
  ];
  const [cardListS, setCardList] = useState(shuffle(cardsList));

  function shuffle(originalArray) {
    var array = [].concat(originalArray);
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    // console.log(array);
    return array;
  }
  const resetCardStatus = useCallback((cardId) => {
    let newArray = [...cardListS];
    let temp = newArray.findIndex(x => x.id === cardId)
    console.log(temp);
    newArray[temp].statusCard = "";
    setCardList(newArray);
    setlicked(clicked + 1);

  },[cardListS])
  const clickHandle = (cardId) => {
    let newArray = [...cardListS];
    let isCheck = newArray.find((x) => x.statusCard === "check");
    var arrIndex = newArray.findIndex((x) => x.id === cardId);
    // console.log(isCheck);
    if (cardListS[arrIndex].statusCard) {
      console.log("is clicked");
      return
    }
    if (isCheck) { // there is check before;
      console.log(isCheck.id ,"is in check mode");
      let tempIndex = newArray.findIndex((x) => x.statusCard === "check");
      if (isCheck.name === newArray[arrIndex].name) {
        console.log("ok");
        newArray[tempIndex].statusCard = "fit";
        newArray[arrIndex].statusCard = "fit";
        // newArray[isCheck.id].statusCard = "fit";
        setCardList(newArray);
      }else{
        console.log("no");
        newArray[tempIndex].statusCard = "noFit";
        newArray[arrIndex].statusCard = "noFit";
        setCardList(newArray);

      }
    } else{
      console.log("no one is in check mode");
      
      newArray[arrIndex].statusCard = "check";
      setCardList(newArray);

    }
    //   newArray[arrIndex].statusCard = "check";
    //   setCardList(newArray);
    // }else {// there is check card
    //   console.log(isCheck.name , newArray[arrIndex].name);
    //   if(isCheck.name === newArray[arrIndex].name){ // we have match!
    //     let tempIndex = newArray.findIndex((x) => x.statusCard === "check");
    //     newArray[tempIndex].statusCard = "fit";
    //     newArray[arrIndex].statusCard = "fit";
    //     setCardList(newArray);
    //   } else{//wrong fit
    //     let tempIndex = newArray.findIndex((x) => x.statusCard === "check");
    //     newArray[tempIndex].statusCard = "notFit";
    //     newArray[arrIndex].statusCard = "notFit";
    //   }
    // }
  };
  return (
    <>
      <h1>MemoryCardsGame</h1>
      <h3>you're failed {clicked} times</h3>
      <div className="cardsWrapper">
        {cardListS.map((card, index) => (
          <div key={`cardNum${index}`}>
            {/* {card} */}
            <Card cardprops={card} clickHandle={clickHandle} resetCardStatus={resetCardStatus} />
          </div>
        ))}
      </div>
    </>
  );
};

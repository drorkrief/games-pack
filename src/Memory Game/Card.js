import React, { useEffect } from "react";

export const Card = ({ cardprops, clickHandle, resetCardStatus }) => {
  useEffect(()=>{
    const timer = setTimeout(() => {
      if(cardprops.statusCard === "noFit"){
        // console.log(cardprops.name);
        resetCardStatus(cardprops.id);
      }
      // console.log('This will run after 1 second!')
    }, 1000);
    return () => clearTimeout(timer);
    
  },[cardprops.statusCard]);
  return (
    <div>
      <div className="flip-card" onClick={() => clickHandle(cardprops.id)}>
        <div
          className={
            cardprops.statusCard ? "flip-card-inner flip" : "flip-card-inner"
          }
        >
          <div className="flip-card-front">
            <h1 style={{ fontSize: "5vw" }}>?</h1>
          </div>
          <div className={cardprops.statusCard === "noFit" ?`flip-card-back noFit`:cardprops.statusCard === "fit" ?`flip-card-back fit` :"flip-card-back"}>
            <img
              src={process.env.PUBLIC_URL + `/images/${cardprops.name}.png`}
              alt={cardprops.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

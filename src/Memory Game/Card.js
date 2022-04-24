import React from "react";

export const Card = ({ cardprops, clickHandle }) => {
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
          <div className="flip-card-back">
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

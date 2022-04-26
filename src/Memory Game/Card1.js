import React, { useEffect, useState } from "react";

function Card({ item, clickHandle }) {
  //   const [flip, setflip] = useState(false);
  // item.current === "noMatch"&& console.log("no match here");
  useEffect(() => {
    console.log(`${item} is changed---`);
  }, [item]);
  item.current === "noMatch" && clickHandle(null);
  return (
    <div
      className={item.current === "check" ? "flip-card" : "flip-card"}
      onClick={() => clickHandle(item.id)}
    >
      <div
        className={item.current ? "flip-card-inner flipnow" : "flip-card-inner"}
      >
        <div className="flip-card-front">
          {/* <img src="img_avatar.png" alt="Avatar" style={{width:"300px",height:"300px"}}/> */}
          <h1>?</h1>
        </div>
        <div
          className={
            item.current === "fit" ? "flip-card-back fit" : "flip-card-back"
          }
          style={{
            background: item.current === "noMatch" ? "lightcoral" : null,
          }}
        >
          <img src={process.env.PUBLIC_URL + item.img} />
        </div>
      </div>
    </div>
  );
}

export default Card;

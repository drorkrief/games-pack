import React, { useState } from 'react'

function Card({item}) {
    const [flip,setflip] = useState(false);
  return (
    <div className={flip?'flip-card flipnow':'flip-card'} onClick={()=> setflip(prev=>!prev)}>
         <div className={'flip-card-inner'}>
    <div className="flip-card-front">
      {/* <img src="img_avatar.png" alt="Avatar" style={{width:"300px",height:"300px"}}/> */}
    <img src={process.env.PUBLIC_URL +item.img}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
    </div>
  )
}

export default Card
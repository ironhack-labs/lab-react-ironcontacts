import React from "react";


const CoolButton =(props)=>{
  return(
    <div>
        <button className={`button is-rounded ${props.type} `} onClick={props.func}>{props.name}</button>
    </div>
  )

}

export default CoolButton;
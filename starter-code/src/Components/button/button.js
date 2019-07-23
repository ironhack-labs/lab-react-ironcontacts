import React from 'react';

function Button (props){
    return (

      <button onClick={props.onclick}>{props.text}</button>
    
      )
  
  
    }


export default Button;

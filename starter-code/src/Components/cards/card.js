import React from 'react';
import '../../App.css';

function Card (props){
    return (
      <div>
      <img src={props.pictureUrl} width="80px" height="100px"></img>
      <h3>{props.name}</h3>
      <p>{props.popularity.toFixed(2)}</p>
      <button id={props.i} onClick={props.onclick}>{props.text}</button>
      </div>
      )
  
  
    }


export default Card;

import React from 'react';
import './App.css';

function Contactcard(props){

    return(
        <div className="card">
          
          <img id="img"src={props.theImage} alt=""/>
           <div>{props.theName}</div>
           <div>{props.thePopularity}</div>
      
        <button onClick = {props.deleteContact}>Delete</button>
        </div>
    )



}


export default Contactcard;
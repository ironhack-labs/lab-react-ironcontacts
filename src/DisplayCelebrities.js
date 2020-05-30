import React from "react";

    
    const DisplayCelebrities = props => {
        return (
         <div>
            <img src={props.pictureUrl} alt=""></img>
             <p>Name: {props.name}</p> 
             <p>Popularity: {props.popularity}</p> 
             <p>ID: {props.id}</p> 

         </div>
        );
      };



export default DisplayCelebrities;




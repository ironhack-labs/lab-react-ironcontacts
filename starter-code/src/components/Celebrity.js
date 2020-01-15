import React from "react";
import "./Celebrity.css"

function Celebrity(props){
    return(
        
      
    <tr>
        <td><img src={props.picture} /></td>
        <td><h3>{props.name}</h3></td>
        <td><h3>{props.popularity}</h3></td>
    </tr>
    
    )
}

export default Celebrity;
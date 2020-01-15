import React from "react";
import "./Celebrity.css"

function Celebrity(props){
    return(
        
      
    <tr>
        <td><img src={props.picture} /></td>
        <td><h3>{props.name}</h3></td>
        <td><h3>{props.popularity.toFixed(2)}</h3></td>
        <div className="delete-btn">
                 <button onClick={props.toDelete}>Delete</button>
        </div>
    </tr>
    
    )
}

export default Celebrity;
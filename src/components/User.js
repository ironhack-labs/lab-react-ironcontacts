import React from "react";
import './User.css';
const User = (props) => {
  
    return (
    <div>
                <tr class ="display">
                    <td><img src={props.picture} alt="nopic"/></td>
                    <td><h2>{props.name}</h2></td>
                    <td><p>{props.popularity}</p></td>
                    <button onClick = {props.clickToDelete}>Delete</button>
                </tr>
            </div>
  );
}

export default User;


import React from "react";

const Contact = props => {
  return (
    <tr>
        <td><img className='card-img' src = {props.pictureUrl} alt ='contact img'/></td> 
        <td><p >{props.name}</p></td>
        <td><p>{props.popularity}</p></td>
        <td><button onClick={props.clickToDelete}>Delete Contact</button></td>
    </tr>
  );
};

export default Contact;

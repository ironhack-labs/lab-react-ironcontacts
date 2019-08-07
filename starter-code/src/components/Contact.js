import React from "react";

function Contact(props) {
  return (
      <tr className="App-contact">
        <td><img src={props.pictureUrl} height="100"/></td>
        <td>{props.name}</td>
        <td>{props.popularity.toFixed(2)}</td>
        <td><button onClick={()=>{props.removeContact(props.index)}}>Delete</button></td>
      </tr>
  );
}

export default Contact;
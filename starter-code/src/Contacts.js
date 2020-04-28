import React from "react";

export default function Contacts(props) {
  return (
 
      <tr key={props.id}>
        <td><img src={props.pictureUrl} alt="" width="100"/></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
        <td>{props.popularity}</td>
        <td><button onClick={props.deleteButton}>Delete</button></td>
      </tr>

  );
}

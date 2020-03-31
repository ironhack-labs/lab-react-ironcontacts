// Iteration 1: Display 5 contacts
import React from "react";

const Contacts = props => {
  return (
    <tr>
      <td><img width="15%" src={props.children.pictureUrl} alt={props.children.name} /></td>
      <td>{props.children.name}</td>
      <td>{props.children.popularity.toFixed(2)}</td>
      <td><button onClick={props.clickToDelete}>Delete</button></td>
    </tr>
  );
};

export default Contacts;


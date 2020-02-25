import React from "react";

function Table(props) {
  return (
    <tr key={props.contact.id}>
      <td>
        <img src={props.contact.pictureUrl} alt="" width="70px" />
      </td>
      <td>{props.contact.name}</td>
      <td>{props.contact.popularity}</td>
      <td>
        <button onClick={() => props.deleteContact(props.contact.id)}> Delete </button>
      </td>
    </tr>
  );
}

export default Table;

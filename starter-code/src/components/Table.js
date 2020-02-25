import React from "react";

function Table(props) {
  return (
    <tr key={props.contact.id}>
      <td>
        <img src={props.contact.pictureUrl} alt="image" width="70px" />
      </td>
      <td>{props.contact.name}</td>
      <td>{props.contact.popularity}</td>
      <td>
        <button className="btn btn-danger" onClick={() => props.deleteContact(props.contact.id)}> Delete </button>
      </td>
    </tr>
  );
}

export default Table;

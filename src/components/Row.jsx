import React from 'react'

function Row(props) {
  return (
      <tr>
        <td><img src={props.contact.pictureUrl} className="contactPicture" alt={props.contact.name}/></td>
        <td>{props.contact.name}</td>
        <td>{props.contact.popularity.toFixed(2)}</td>
        <td><button id={props.contact.id} type="button" className="btn btn-light" onClick={props.onClick}>Delete</button></td>
      </tr>
  );
}

export default Row;
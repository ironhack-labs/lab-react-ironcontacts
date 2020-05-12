import React from 'react';

function Card(props) {
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} style={{ width: 100 }} />
      </td>

      <td>{props.name}</td>

      <td>{props.popularity.toFixed(2)}</td>
      <button onClick={() => props.removeContact(props.id)}>Delete</button>
    </tr>
  );
}

export default Card;

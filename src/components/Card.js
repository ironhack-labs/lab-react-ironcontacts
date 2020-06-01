import React from 'react';

function Card(props) {
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} alt="" width="70" height="100" />
      </td>
      <td>
        <h5>{props.name}</h5>
      </td>
      <td>{props.popularity}</td>
          <td><button onClick={props.clickToDelete}>delete</button></td>
    </tr>
  );
}

export default Card;

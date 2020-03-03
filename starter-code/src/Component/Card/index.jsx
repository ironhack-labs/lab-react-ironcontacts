import React from 'react';
import './style.css';

const Card = ({ id, name, pictureUrl, popularity, removeActor }) => {
  return (
    <tr className="contactCard">
      <td>
        <img src={pictureUrl} alt={name}></img>
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>
        <button onClick={() => removeActor(id)}>Remove</button>
      </td>
    </tr>
  );
};

export default Card;

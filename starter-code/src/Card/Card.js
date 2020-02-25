import React from "react";
import "./Card.css";

const Card = ({ pictureUrl, name, popularity, button }) => {
  return (
    <tr>
      <td>
        <img src={pictureUrl} alt="" />
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>
        <button onClick={button}>Delete</button>
      </td>
    </tr>
  );
};

export default Card;

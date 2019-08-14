import React from "react";

const Card = ({ name, picture, popularity }) => (
  <li className="col-md-4 oneMovie">
    <p>{name}</p>
    <img src={picture} />
    <p>{popularity}</p>
  </li>
);

export default Card;

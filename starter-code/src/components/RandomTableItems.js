import React from "react";

const RandomTableItems = ({randomContact}) => (
  <tr>
    <td>
      <img src={randomContact.pictureUrl} alt={randomContact.name} />
    </td>
    <td>{randomContact.name}</td>
    <td>{randomContact.popularity}</td>
  </tr>
);

export default RandomTableItems;

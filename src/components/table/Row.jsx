import React from "react";

const Row = ({ contact }) => {
  return (
    <tr>
      <td>
        <img src={contact.pictureUrl} alt={contact.name} />
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
    </tr>
  );
};

export default Row;

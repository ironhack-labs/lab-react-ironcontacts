import React, { useState } from "react";

const TableRow = ({ contact, deleteContact }) => {
  return (
    <tr className="contact-row">
      <td>
        <img src={contact.pictureUrl} alt={contact.name} />
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
    </tr>
  );
};

export default TableRow;

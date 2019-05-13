import React from "react";

const ContactTableItems = ({initialContact, deleteItem}) => (
  <tr>
    <td>
      <img src={initialContact.pictureUrl} alt={initialContact.name} />
    </td>
    <td>{initialContact.name}</td>
    <td>{initialContact.popularity}</td>
    <td><button onClick={deleteItem}>Delete</button></td>
  </tr>
);

export default ContactTableItems;
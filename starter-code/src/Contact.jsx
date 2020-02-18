import React from "react";

const Contact = ({ contact, handleDelete }) => {
  return (
    <tr>
      <td>
        <img className="contact-picture" src={contact.pictureUrl} />
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      <td>
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </td>
    </tr>
  );
};
export default Contact;

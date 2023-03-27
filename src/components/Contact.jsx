import React from "react";

function Contact({ contact, onDelete }) {
  return (
    <tr>
      <th scope="row"></th>
      <td>
        <img src={contact.pictureUrl} alt="Contact" />
      </td>
      <td>{contact.name}</td>
      <td>{contact.popularity}</td>
      <td>{contact.wonOscar ? "🏆" : ""}</td>
      <td>{contact.wonEmmy ? "🌟" : ""}</td>
      <td>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
}

Contact.defaultValue = {
  onDelete: () => {},
};

export default Contact;

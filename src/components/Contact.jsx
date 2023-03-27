import React from "react";

function Contact({ contact, onClikDelete }) {
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
        <button onClick={onClikDelete}>Delete</button>
      </td>
    </tr>
  );
}

Contact.defaultValue = {
  onClikDelete: () => {},
};

export default Contact;

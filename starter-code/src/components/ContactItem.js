import React from "react";
import "./contactList.css";

const ContactItem = props => {
  const contact = props.contact;

  return (
    <tr>
      <td>
        <img className="contactImg" src={contact.pictureUrl} />
      </td>
      <td className="align-middle">{contact.name}</td>
      <td className="align-middle">{contact.popularity}</td>
    </tr>
  );
};

export default ContactItem;

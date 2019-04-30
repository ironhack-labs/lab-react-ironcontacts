import React from "react";
import "./Contacts.css";

const Contact = ({ contact }) => (
  <table className="contact">
    <tr className="row">
      <td className="column-body">
        <span className="name">{contact.name}</span>
      </td>
      <td className="column-body">
        <span className="popularity">{contact.popularity}</span>
      </td>
      <td className="column-body">
        <img className="picture" src={contact.pictureUrl} />
      </td>
    </tr>
  </table>
);

export default Contact;

import React from "react";

export const ContactItem = ({ picture, name, popularity }) => (
  <tr>
    <td>
      <img src={picture} alt="contact image" className="contact-img" />
    </td>
    <td className="contact-name">{name}</td>
    <td>{popularity}</td>
  </tr>
);

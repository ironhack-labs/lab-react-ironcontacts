import React from "react";

const ContactTableItems = ({initialContact}) => (
  <tr>
    <td>
      <img src={initialContact.pictureUrl} alt={initialContact.name} />
    </td>
    <td>{initialContact.name}</td>
    <td>{initialContact.popularity}</td>
  </tr>
);

export default ContactTableItems;

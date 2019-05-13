import React from "react";

const ContactTableItem = () => (
  <tr>
    <td>
      <img src={initialContacts[0].pictureUrl} alt={initialContacts[0].name} />
    </td>
    <td>{initialContacts[0].name}</td>
    <td>{initialContacts[0].popularity}</td>
  </tr>
);

export default ContactTableItem;

import React from "react";

const ContactTable = ({initialContacts}) => (
  <div className="contact-table-container">
    <table className="contact-table">
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      <tr>
        <td>
          <img src={initialContacts[0].pictureUrl} alt={initialContacts[0].name}/>
        </td>
        <td>{initialContacts[0].name}</td>
        <td>{initialContacts[0].popularity}</td>
      </tr>
      <tr>
        <td>
          <img src={initialContacts[1].pictureUrl} alt={initialContacts[1].name}/>
        </td>
        <td>{initialContacts[1].name}</td>
        <td>{initialContacts[1].popularity}</td>
      </tr>
      <tr>
        <td>
          <img src={initialContacts[2].pictureUrl} alt={initialContacts[2].name}/>
        </td>
        <td>{initialContacts[2].name}</td>
        <td>{initialContacts[2].popularity}</td>
      </tr>
      <tr>
        <td>
          <img src={initialContacts[3].pictureUrl} alt={initialContacts[3].name}/>
        </td>
        <td>{initialContacts[3].name}</td>
        <td>{initialContacts[3].popularity}</td>
      </tr>
      <tr>
        <td>
          <img src={initialContacts[4].pictureUrl} alt={initialContacts[4].name}/>
        </td>
        <td>{initialContacts[4].name}</td>
        <td>{initialContacts[4].popularity}</td>
      </tr>
    </table>
  </div>
);

export default ContactTable;
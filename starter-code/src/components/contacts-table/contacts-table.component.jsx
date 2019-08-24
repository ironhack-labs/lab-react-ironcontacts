import React from "react";

import './contacts-table.styles.css'

export const ContactsTable = props => {

  const handleDeleteRow = i => {
    props.borrar(i)
  }

  return (
    <div className="card-list">
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
            {props.contacts.map((contact, i) => (
              <tr key={i}>
                <td>
                  <img alt={contact.name} src={contact.pictureUrl} className="contact-image"/>
                </td>
                <td>
                  {contact.name}
                </td>
                <td>
                  {contact.popularity}
                </td>
                <td>
                  <button  onClick={() => handleDeleteRow(i)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

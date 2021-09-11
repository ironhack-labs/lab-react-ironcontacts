import React from 'react';

import ContactTableRow from '../ContactsTableRow/ContactTableRow';

import './ContactsTable.css';

const ContactsTable = props => {
  return (
    <table className="contacts-container">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>

      <tbody>
        {props.contacts.map(contact => (
          <ContactTableRow key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactsTable;

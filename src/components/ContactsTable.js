import React, { useState } from 'react';
import Contacts from '../contacts.json';
import Contact from './Contact';

const ContactsTable = () => {
  const slicedContacts = Contacts.slice(0, 5);
  const [contacts] = useState(slicedContacts);
  console.log(contacts);

  const contactsList = contacts.map((contact) => (
    <Contact
      key={contact.name}
      picture={contact.pictureUrl}
      name={contact.name}
      popularity={contact.popularity}
    />
  ));

  return (
    <div>
      <h1>IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>{contactsList}</tbody>
      </table>
    </div>
  );
};

export default ContactsTable;

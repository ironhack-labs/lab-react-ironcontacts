import React from 'react';
import contacts from '../contacts.json';
import Contact from './Contact';

const contactsArray = contacts.slice(0,5);

function ContactsTable() {
  console.log(contactsArray);

  return (
    <div>
      <h1 className="m-3 mb-3 fw-bold">IronContacts</h1>
      <table className="m-3">
        <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Oscar</th>
          <th>Emmy</th>
        </tr>
        </thead>
          <tbody>
            {contactsArray.map(contact => <Contact contact={contact} key={contact.id} />)}
          </tbody>
      </table>
    </div >
  )
}

export default ContactsTable
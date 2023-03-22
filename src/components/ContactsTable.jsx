import React from 'react';
import contacts from '../contacts.json';
import Contact from './Contact';

const contactsArray = contacts.slice(0,5);

function ContactsTable() {
  console.log(contactsArray);

  return (
    <div>
      <h1>IronContacts</h1>
      <table>
        <thead>
        </thead>
          <tbody>
            {contactsArray.map(contact => <Contact contact={contact} key={contact.id} />)}
          </tbody>
      </table>
    </div >
  )
}

export default ContactsTable
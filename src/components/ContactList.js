import React from 'react'
import contacts from '../contacts.json'
import ContactItem from './ContactItem';

export default function ContactList() {
  const firstContacts = contacts.slice(5, 10);

  console.log(contacts);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Popularity</th>
          <th scope="col">Won Oscar</th>
          <th scope="col">Won Emmy</th>
        </tr>
      </thead>
      <tbody>
        {firstContacts.map(contact => <ContactItem contact={contact} />)}
      </tbody>
    </table>
  )
}

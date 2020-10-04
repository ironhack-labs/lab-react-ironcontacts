import React from 'react';
import contacts from './contacts.json'

function ContactsTable() {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{console.log(contacts)}</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}

export default ContactsTable;
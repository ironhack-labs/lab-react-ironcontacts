import React from 'react';
import '../App.css';

const ContactsTable = props => {
  const { contacts } = props;
  return (
    <table class='contacts-table'>
      <TableHead />
      <TableBody contacts={contacts} />
    </table>
  )
}

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const { contacts } = props;
  return (
    <tbody>
      {contacts.map((contact, index) => {
        return (
          <tr key={index + contact.name}>
            <td><img className='portrait' src={contact.pictureUrl} alt='portrait' /></td>
            <td>{contact.name}</td>
            <td>{Math.round(100 * contact.popularity) / 100}</td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default ContactsTable;
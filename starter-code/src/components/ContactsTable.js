import React from 'react';
import SmallButton from './SmallButton';
import '../App.css';

const ContactsTable = props => {
  const { contacts, deleteContact } = props;
  return (
    <table className='contacts-table'>
      <TableHead />
      <TableBody contacts={contacts} deleteContact={deleteContact} />
    </table>
  )
}

const TableHead = () => {
  return (
    <thead>
      <tr className='table-head-row'>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const { contacts, deleteContact } = props;
  return (
    <tbody>
      {contacts.map((contact, index) => {
        return (
          <tr key={index + contact.name}>
            <td><img className='portrait' src={contact.pictureUrl} alt='portrait' /></td>
            <td>{contact.name}</td>
            <td>{Math.round(100 * contact.popularity) / 100}</td>
            <td><SmallButton action={deleteContact} value={contact.index}>Delete</SmallButton></td>
          </tr>
        )
      })}
    </tbody>
  )
}

export default ContactsTable;

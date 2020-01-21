import React from 'react';
import contacts from './contacts.json'


const contactsTable = ({ picture, name, popularity }) => {
  return (
    <table style="width:100%">
        <tr>
          <td>{picture}</td>
          <td>{name}</td>
          <td>{popularity}</td>
        </tr>
    </table>
  )
};

export default contactsTable;


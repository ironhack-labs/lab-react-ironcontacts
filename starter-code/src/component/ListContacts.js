import React from 'react';
import RowContacts from './RowContact';

const ListContacts = ({fiveContacts}) => (
  <div className="">
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      {fiveContacts.map(contact => (
        <RowContacts contact={contact}/>
      ))}
    </table>
  </div>
);

export default ListContacts
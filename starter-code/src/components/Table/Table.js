import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow';

const Table = ({ contacts, funcRemove, children }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.map((contact, index) => {
            return <TableRow contact={contact} index={index} funcRemove={funcRemove} children={children} />
          })
        }
      </tbody>
    </table>
  );
}

export default Table;

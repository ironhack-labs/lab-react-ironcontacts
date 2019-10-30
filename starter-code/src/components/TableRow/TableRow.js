import React, { Component } from 'react';
import Button from '../Button/Button';

const TableRow = ({ contact, index, funcRemove, children }) => {
  return(
    <tr key={index}>
      <td><img src={contact.pictureUrl} alt={contact.name} className="contactImg"></img></td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      <td><Button onclick={() => funcRemove(index)}>{children}</Button></td>
    </tr>
  );
};

export default TableRow;

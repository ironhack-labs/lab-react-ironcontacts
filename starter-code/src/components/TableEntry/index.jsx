import React, { Component } from 'react';

const TableEntry = props => {
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} alt={props.name} />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <button onClick={() => props.delete(props.id)}>Remove</button>
    </tr>
  );
};

export default TableEntry;

import React, { Component } from 'react';
import Button from '../button/Button.js'

  const Table = ({ contacts, updateState }) => {
    const actorsList = contacts.map((element, idx) => {
        return (
          <tr key={idx}>
            <td><img src={element.pictureUrl} width='100px'></img></td>
            <td>{element.name}</td> 
            <td>{element.popularity}</td>
            <td><Button name="Delete" actors={contacts} updateState={updateState} actorName={element.name} isDelete /></td>
          </tr>
        )
      })
    return actorsList;
  }

export default Table;

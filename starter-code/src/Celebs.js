import React, {Component} from 'react';
import contacts from './contacts.json';

function Celebs(props) {
    return (
      <tr>
        <td><img src={props.pictureUrl} alt ={props.name}/></td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
      </tr>
    )
  }

export default Celebs;
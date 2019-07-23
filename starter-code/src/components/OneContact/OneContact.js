import React from 'react';
import './OneContact.css'

const OneContact = (props) => {
  return(
    <tr>
      <td><img src={props.pictureUrl} /></td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
      <td><button onClick={props.deleteButton}>Delete</button></td>
    </tr>
  )
}

export default OneContact;
import React from 'react';

const Contact = ({ pictureUrl, name, popularity, deleteHandler }) => {
  return (
    <tr>
      <td><img src={ pictureUrl } alt={ name } /></td>
      <td>{ name }</td>
      <td>{ popularity }</td>
      <td><button onClick={deleteHandler}>Delete</button></td>
    </tr>
  )
}

export default Contact;
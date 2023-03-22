import React from 'react';

function Contact({ contact }) {
  return (
    <tr>
      <td><img src={contact.pictureUrl} alt="Contact Pic" /></td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
    </tr>
  )
}

export default Contact
import React from 'react'

const Contact = ({ contact, deleteContact }) => {
  return (
    <tr>
      <td><img src={contact.pictureUrl} alt=""/></td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      <td>{contact.wonOscar && "🏆"}</td>
      <td>{contact.wonEmmy && "🏆"}</td>
      <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
    </tr>
  )
}

export default Contact
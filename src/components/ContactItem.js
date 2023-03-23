import React from 'react'

export default function ContactItem({ contact, onDeleteContact }) {
  const imgStyle = {
    width: '3rem',
    borderRadius: '10px'
  }
  
  return (
    <tr>
      <td><img src={contact.pictureUrl} alt={contact.name} style={imgStyle} /></td>
      <td>{contact.name}</td>
      <td>{contact.popularity.toFixed(2)}</td>
      <td>{contact.wonOscar ? '🏆' : ''}</td>
      <td>{contact.wonEmmy ? '🌟' : ''}</td>
      <td><button className='btn btn-danger' onClick={onDeleteContact}>Delete</button></td>
    </tr>
  )
}

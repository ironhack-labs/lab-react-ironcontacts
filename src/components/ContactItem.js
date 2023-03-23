import React from 'react'

export default function ContactItem({ contact }) {
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
      <td>{contact.wonEmmy ? '🏆' : ''}</td>
    </tr>
  )
}

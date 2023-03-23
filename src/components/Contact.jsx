import React from 'react';

function Contact({ contact, onClickDelete }) {
  return (
    <tr>
      <td className="me-2"><img src={contact.pictureUrl} alt="Contact Pic" style={{ width: 60 }} /></td>
      <td className="me-2">{contact.name}</td>
      <td className="me-2">{contact.popularity.toFixed(2)}</td>
      <td className="me-2">{contact.wonOscar ? "🏆" : ""}</td>
      <td className="me-2">{contact.wonEmmy ? "🌟" : ""}</td>
      <td className="me-2"><button onClick={onClickDelete}>Delete</button></td>
    </tr>
  )
}

Contact.defaultValue = {
  onClickDelete: () => { }
}
export default Contact
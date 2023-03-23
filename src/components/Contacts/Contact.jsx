import React from 'react'


function Contact({ contact, onClickDelete }) {
  return (
    <tr className="">
      <td><img className="m-2" src={contact.pictureUrl} alt="pictureUrl" style={{ width: 60 }} /></td>
      <td className="m-2">{contact.name}</td>
      <td className="m-2">{contact.popularity.toFixed(2)}</td>
      <td className="m-2">{contact.wonOscar ? "🏆" : ""}</td>
      <td className="m-2">{contact.wonEmmy ? "🌟" : ""}</td>
      <td className="m-2"><button onClick={onClickDelete}>Delete</button></td>
    </tr>
  )
}

Contact.defaultValue = {
  onClickDelete: () => {}
}

export default Contact
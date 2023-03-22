import React from 'react'


function Contact({ contact }) {
  return (
    <tr className="">
      <td><img className="m-2" src={contact.pictureUrl} alt="pictureUrl" style={{ width: 60 }} /></td>
      <td className="m-2">{contact.name}</td>
      <td className="m-2">{contact.popularity.toFixed(2)}</td>
      <td className="m-2">{contact.wonOscar ? "🏆" : ""}</td>
      <td className="m-2">{contact.wonEmmy ? "🏆" : ""}</td>
    </tr>
  )
}

export default Contact
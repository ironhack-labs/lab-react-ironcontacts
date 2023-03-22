import React from 'react'


function Contact({ contact }) {
  return (
    <tr className="d-flex flex-row">
        <td><img  className="m-2" src={contact.pictureUrl} alt="pictureUrl" style={{ width: 60 }} /></td>
        <td className="m-2">{contact.name}</td>
        <td className="m-2">{contact.popularity.toFixed(2)}</td>
    </tr>
  )
}

export default Contact
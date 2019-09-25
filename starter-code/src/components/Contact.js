import React from 'react'

function Contact({ contactInfo, deleteOne }) {
  return (
    <tr>
      <td>
        <img src={contactInfo.pictureUrl} alt={contactInfo.name} width={100} />
      </td>
      <td>{contactInfo.name}</td>
      <td>{contactInfo.popularity}</td>
      <td>
        <button
          class="btn btn-danger"
          onClick={() => deleteOne(contactInfo.name)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Contact

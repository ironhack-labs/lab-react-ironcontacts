import React from 'react'

const ContactRow = ({ pictureUrl, name, popularity, onClickDelete }) => {
  return (
    <tr>
      <td><img src={pictureUrl} alt={name}/></td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>
        <button className="btn btn-danger" onClick={onClickDelete}>Delete</button>
      </td>
    </tr>
  )
}

export default ContactRow;
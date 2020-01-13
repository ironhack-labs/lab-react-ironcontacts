import React from 'react';

const Contact = ({ pictureUrl, name, popularity, onClickDelete }) => {
  return (
    <tr>
      <td>
        <img
          src={pictureUrl}
          alt={name}
          className="img-thumbnail"
          style={{ maxWidth: "70px" }}
        />
      </td>
      <td>{name}</td>
      <td>{popularity.toFixed(2)}</td>
      <td>
        <button className="btn btn-danger" onClick={onClickDelete}>x</button>
      </td>
    </tr>
  )
}

export default Contact;
import React from 'react'

const ContactsComponent = ({ name, pictureUrl, popularity, clickToDelete }) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <img alt={name} src={pictureUrl} width="250" />
      <p>{popularity}</p>
      <button onClick={clickToDelete}>Delete</button>
    </div>
  )
}

export default ContactsComponent
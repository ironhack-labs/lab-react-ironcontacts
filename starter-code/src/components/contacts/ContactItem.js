import React from 'react'
import './ContactItem.css'

// el id es el id del json, el key es como algo interno de react
const ContactItem = ({
  id,
  name,
  pictureUrl,
  popularity,
  onClickDelete
}) => (
    <div className="contact" id={id}>
      <img src={pictureUrl} alt={name} />
      <div className="contact-info">
        <p>{name}</p>
        <p>{popularity}</p>
        <button onClick={onClickDelete}>Delete</button>
      </div>
    </div>
  )

export default ContactItem
import React from 'react'
import './ContactItem.css'

const ContactItem = ({
  id,
  name,
  pictureUrl,
  popularity
}) => (
    <div className="contact" id={id}>
      <img src={pictureUrl} alt={name} />
      <div className="contact-info">
        <p>{name}</p>
        <p>{popularity}</p>
      </div>
    </div>
  )

export default ContactItem
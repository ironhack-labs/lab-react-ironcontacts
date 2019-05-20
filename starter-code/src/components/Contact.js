import React from 'react'

const Contact = ({contact}) => {

  return (
    <div className="contacts-list">
      <div className="contact-image"><img src={contact.pictureUrl} alt=""/></div>
      <div className="contact-name"><p>{contact.name}</p></div>
      <div className="contact-popularity"><p>{contact.popularity}</p></div>
    </div>
  )
}

export default Contact
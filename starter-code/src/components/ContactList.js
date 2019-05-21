import React from 'react'

const ContactList = ({addedContacts}) => {

  return (
    <div>
      <div className="contacts-list">
        <div className="contact-image"><h2>Picture</h2></div>
        <div className="contact-name"><h2>Name</h2></div>
        <div className="contact-popularity"><h2>Popularity</h2></div>
      </div>
      <div>{addedContacts}</div>
    </div>
  )
}

export default ContactList
import React from 'react'

const ContactList = ({addContacts}) => {
  
  return (
    <div className="row">
      <div className="contact-names">
          <div className="contact-name">Picture</div>
          <div className="contact-name">Name</div>
          <div className="contact-name">Popularity</div>
        </div>
      <div>{addContacts}</div>
    </div>
  );
}

export default ContactList
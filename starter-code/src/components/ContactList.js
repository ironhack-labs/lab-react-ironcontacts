import React from 'react'
import Contact from './Contact'

const ContactList = ( props ) => {

  const size = 5;
  const listContact = props.contacts.slice(0, size).map((contacts, index) => (
    <div className="col-4 mb-4" key={index}>
      <Contact contacts={contacts} />
    </div>
  ))
  
  return (
    <div className="ContactList">
      <h4>Iron Contacts</h4>
      <div className="row">
        <div className="contact-names">
          <div className="contact-name">Picture</div>
          <div className="contact-name">Name</div>
          <div className="contact-name">Popularity</div>
        </div>
        {listContact}
      </div>
    </div>
  );
}

export default ContactList
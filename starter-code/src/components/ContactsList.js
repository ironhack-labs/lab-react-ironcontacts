import React from 'react'
import Contact from './Contact';

const ContactsList = (props) => {
  const list = props.contacts.map((contact, i) => (
    <div className="col-4 mb-4" key={i}>
      <Contact contact={contact} />
    </div>
  ))

  return (
    <div className="ContactsList">
      <div className="row">
        {list}        
      </div>
    </div>
  );
}

export default ContactsList

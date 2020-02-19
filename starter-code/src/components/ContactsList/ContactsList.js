import React from 'react';
import ContactRow from './ContactRow';

function ContactsList(props) {
  return props.contacts.map((contact ) => {
    return (
      <ContactRow 
        id={contact.id}
        pictureUrl={contact.pictureUrl}
        name={contact.name}
        popularity={contact.popularity}
        action={contact.action}
        onDelete={props.onDelete}
      />
    )
  })
}

export default ContactsList;
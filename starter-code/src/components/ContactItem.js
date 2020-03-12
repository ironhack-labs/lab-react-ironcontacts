import React from 'react';

const ContactItem = ({contact}) => {
  console.log("EL contacto es " + contact);
  return(
    <li>
      <div className="name">{contact.name}</div>
      <div className="popularity">{contact.popularity}</div>
    </li>
  );
}


export default ContactItem;
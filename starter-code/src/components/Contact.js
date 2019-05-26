import React from 'react';
import Button from './../components/Button';

const Contact = ({contact}) => {

  return (
    <div className="Contact">
      <div className="contact-item">
        <img src={contact.pictureUrl} className="contact-image"/>
        <div className="contact-item-name"><p>{contact.name}</p></div>
        <div className="contact-item-name"><p>{contact.popularity}</p></div>
        <Button children="Eliminar contacto"
          function={this.deleteContacts} />
      </div>
    </div>
  )
}

export default Contact
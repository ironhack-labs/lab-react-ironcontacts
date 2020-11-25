import React from 'react';
import { ContactRow } from './styles/index';

const Contact = ({ name, pictureUrl, popularity, HandleDeleteContact, id }) => {
  return (
    <ContactRow>
      <img src={pictureUrl} alt={name} />
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <h3>{Math.round(popularity * 100) / 100}</h3>
      </div>
      <button onClick={() => HandleDeleteContact(id)}>Delete</button>
    </ContactRow>
  );
};

export default Contact;

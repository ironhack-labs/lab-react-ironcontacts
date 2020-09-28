import React from 'react';
import '../stylesheets/ContactCard.css'

const ContactCard = (props) => (
  <div className="ContactCard">
    <td>
      <img src={props.contact.pictureUrl} className='picture'/>
    </td>
    <td>
      <span>{props.contact.name}</span>
    </td>
    <td>
      <span>{props.contact.popularity.toFixed(2)}</span>
    </td>
    <td>
        <button>Delete</button>
    </td>
  </div>
);

export default ContactCard;

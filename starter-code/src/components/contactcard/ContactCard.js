import React from 'react';
import './contactcard.css';


function ContactCard(props) {
  return (
    <div className="contact-card">            
      <div><img className="contact-picture" src={props.thePictureUrl} alt={props.theName} /></div>
      <div className="contact-name">{props.theName}</div>
      <div className="contact-popularity">{props.thePopularity}</div>
      <button onClick={props.deleteTheContact}>Delete Contact</button>
    </div>
  );
}

export default ContactCard;
import React from 'react';
import './contactcard.css'


function ContactCard(props) {
  return (
    <div className='contact-card'>
      <div className='contact-picture'>
        <img src={props.thePictureUrl} />
      </div>

      <div className='contact-name'>
        <p>
          {props.theName}
        </p>
      </div>

      <div className='contact-popularity'>
        <p>
          {props.thePopularity}
        </p>
      </div>

      <button onClick={props.deleteTheContact}>
        Delete This Contact</button>

    </div>
  )
}

export default ContactCard;
import React from 'react';
import '../stylesheets/ContactCard.css';

const ContactCard = (props) => (
    <article className="ContactCard">
        <img src={props.contact.pictureUrl} alt="Portrait of celebrity"/>
        <p>{props.contact.name}</p>
        <p>{Math.round(props.contact.popularity * 100) / 100}</p>
        <div className="ContactCard__button-wrapper">
            <button value={props.contact.id} onClick={props.deleteHandler} className="ContactCard__button">Delete</button>
        </div>
    </article>
)

export default ContactCard
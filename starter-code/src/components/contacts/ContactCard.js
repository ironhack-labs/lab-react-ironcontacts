import React from 'react';
import './contactcard.css';



function ContactCard(props){

    return(
        <div className="card">
          <img src={`${props.image}`} alt='contact' />
          <h5>{props.name}</h5>
          <h6>{props.popularity}</h6>
          <button onClick = {props.deleteContact}>
            Delete This Contact</button>
        </div>
    )



}


export default ContactCard;

import React from 'react';
import './ListOfContacts.css';

export default function OneSingleContact(props){

    return(
        <div id="flex-box">
            <img src={props.theContact.pictureUrl} alt="NA" height="100px"/>
            <h3>{props.theContact.name}</h3>
            <h3>{props.theContact.popularity}</h3>
        </div>
    )
}

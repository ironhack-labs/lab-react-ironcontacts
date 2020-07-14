import React from 'react'
import contacts from './../contacts.json'
import './Contact-card.css'

const ContactCard = props => {
    return (

        <tr>
            <td>
                <img alt="contact-picture" src={props.contact.pictureUrl}></img>
            </td>
            <td>{props.contact.name}</td>
            <td>{props.contact.popularity}</td>
            <td><button onClick={props.remove}>Delete</button></td>
        </tr>
    )
}

export default ContactCard
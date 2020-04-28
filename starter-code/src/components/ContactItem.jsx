import React from 'react'
import './Contacts.css'
export default function ContactItem(props) {
    return (
      
            <tr>
                <td><img className="contact-image"src={props.picture} alt="contact"></img></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td>
            </tr> 
        
    )
}

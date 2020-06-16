import React from 'react';

function Contact(props){
    return(
    <tbody>
        {props.contacts.map((contact)=> { 
            return (
                <tr>
                    <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td><button className="delete-button" onClick={() => props.deleteContact(contact.name)}>Delete</button></td>
                </tr>
            )
        })}
    </tbody>
    )   
}

export default Contact;
import React from 'react';

const ContactDetail = (props) => {
    return (
        <tr>
            <td><img src={props.contact.pictureUrl} alt={props.contact.name} width="100px"/></td>
            <td>{props.contact.name}</td>
            <td>{props.contact.popularity.toFixed(2)}</td>
            <td><button onClick={() => props.onDelete(props.contact.id)}>Delete</button></td>
        </tr>
    )
}

export default ContactDetail
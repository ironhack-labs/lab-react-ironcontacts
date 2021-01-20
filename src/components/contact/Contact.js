import React from 'react';
import { DeleteBtn } from '../buttons/Buttons';

function Contact(props) {
    return (
        <tr>
            <td><img src={props.pictureUrl} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><DeleteBtn deleteContact={props.deleteContact} /></td>
        </tr>
    )
}

export default Contact;
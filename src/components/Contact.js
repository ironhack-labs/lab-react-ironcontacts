import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../Main.css';

function Contact(props) {
    return (
        <tr>
            <td>
            <img src={props.pictureUrl} alt={props.name} className="img-fluid img-width" /></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button className="btn btn-dark" onClick={() => props.deleteHandler(props.contactId)}>Delete</button></td>
        </tr>
    )
}

export default Contact;
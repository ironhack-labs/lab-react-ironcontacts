import React from 'react';
import './ContactItem.css'

function ContactItem({id, name, pictureUrl, popularity, onClickDelete}) {

    return(
        <tr>
        <td><img src={pictureUrl} /></td>
        <td>{name}</td>
        <td>{popularity.toFixed(2)}</td>
        <td><button className="btn btn-primary" onClick={() => onClickDelete(id)}>Delete</button></td>
        </tr>
    )

}

export default ContactItem
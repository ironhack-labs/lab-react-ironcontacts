import React from 'react'
import './contactsTable.css'

const ContactsTable = ({ pictureUrl, name, popularity, removeContact }) => {
    return (
        <tr>
            <td><img src={pictureUrl} alt={name}/></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button onClick={removeContact}>Eliminar</button></td>
        </tr>
    )
}


export default ContactsTable
import React from 'react'
import './ContactCard.css'

const ContactCard = ({
    name,
    pictureUrl,
    popularity,
    id,
    deleteContact
}) => (
        <tr className="ContactCard">
            <td><img src={pictureUrl} alt={name} className="img-thumbnail"/></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button className="btn btn-danger" onClick={deleteContact}>Delete</button></td>
        </tr>
    )

export default ContactCard
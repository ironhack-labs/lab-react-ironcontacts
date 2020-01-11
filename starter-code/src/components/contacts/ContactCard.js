import React from 'react'
import './ContactCard.css'

const ContactCard = ({
    name,
    pictureUrl,
    popularity,
    id
}) => (
        <tr className="ContactCard">
            <td><img src={pictureUrl} alt={name} /></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
        </tr>
    )

export default ContactCard
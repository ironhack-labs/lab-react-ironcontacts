import React from 'react'
import './ContactCard.css'

const ContactCard = ({
    name,
    pictureUrl,
    popularity,
    id
}) => {
    return (
        <tr className="ContactCard">
            <td><img src={pictureUrl} alt={name} /></td>
            <td>{name}</td>
            <td>{popularity}</td>
        </tr>
    )
}

export default ContactCard
import React from 'react'
import './ContactList.css'

const ContactCard = ({pictureUrl, name, popularity}) => {
    return (
        <tr className = "contact-container">
            <th><img src={pictureUrl} alt="Foto de perfil no encontrada"/></th>
            <th>{name}</th>
            <th>{popularity}</th>
        </tr>
    )
}
export default ContactCard
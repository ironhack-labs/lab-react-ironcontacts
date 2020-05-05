import React from 'react'
import './Contact.css'

const Contact = ({ pictureUrl, name, popularity, removeContact }) => {
    return (
        <article className="contact-card">
            <img src={pictureUrl} alt={name} />
            <p>{name}</p>
            <p>{popularity}</p>
            <button onClick={removeContact}>Eliminar</button>
        </article>
    )
}

export default Contact
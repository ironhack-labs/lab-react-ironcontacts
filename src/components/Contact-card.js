import React from 'react';
import './Contact-card.css';

function ContactCard({ pictureUrl, name, popularity, deleteContact }) {
    return (
        <>

            <tr>
                <td><img src={pictureUrl} alt={name}></img></td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td><button onClick={deleteContact}>Delete</button></td>
            </tr>

        </>
    );
}

export default ContactCard;

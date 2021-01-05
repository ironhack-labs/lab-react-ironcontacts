import React from 'react';
import './ContactCard.css';

function ContactCard({ name, pictureUrl, popularity, id, handleRemove }) {
        return (
                <tr key={id} className='contact-cart'>
                        <td><img src={pictureUrl} /></td>
                        <td>{name}</td>
                        <td>{popularity}</td>
                        <td><button onClick={handleRemove} aria-label={id}>Remove</button></td>
                </tr>
        )
}

export default ContactCard
{ }
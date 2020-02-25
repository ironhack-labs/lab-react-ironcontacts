import React from 'react';
import './Card.css'

const Card = ({ id, name, pictureUrl, popularity, deleteContact }) => {
    return (
        <tr className="contactsCard">
            <td><img src={pictureUrl} alt={`${name}`}></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={deleteContact}>Delete</button></td>
        </tr>
    )
}

export default Card

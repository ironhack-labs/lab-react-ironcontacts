import React from 'react';
import './Card.css'


const Card = ({ id, name, pictureUrl, popularity }) => {
    return (
        <tr className="contactsCard">
            <td><img src={pictureUrl} alt={`${name}`}></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
        </tr>
    )
}

export default Card

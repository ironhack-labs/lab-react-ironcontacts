import React from 'react';

function Card(contact) {
    return (
            <tr>
                <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
            </tr>
    );
}

export default Card;

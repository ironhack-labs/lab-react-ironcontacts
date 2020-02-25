import React from 'react';

const listFriends = ({ name, pictureUrl, popularity, deletePerson }) => {
    return (
        <tr>
            <td><img src={pictureUrl} alt={name} /></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td> <button onClick={deletePerson}>Eliminar</button></td>
        </tr>
    )
}

export default listFriends
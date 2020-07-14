import React from 'react';

const StaticContacts = ({ name, pictureUrl, popularity, id, removeContact }) => {
    return (
        < tr key={id} >
            <td> <img style={{ width: '50px' }} src={pictureUrl} alt={name} /></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={removeContact}>Delete</button></td>
        </tr >
    )
}

export default StaticContacts
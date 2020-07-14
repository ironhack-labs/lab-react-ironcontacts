import React from 'react';

const StaticContacts = ({ name, pictureUrl, popularity, id, removeContact }) => {
    return (
        < tr key={id} >
            <td> <img style={{ width: '50px' }} src={pictureUrl} alt={name} /></td>
            <td className="is-vcentered">{name}</td>
            <td className="is-vcentered">{popularity}</td>
            <td className="is-vcentered"><button className="button is-danger is-outlined" onClick={removeContact}>Delete</button></td>
        </tr >
    )
}

export default StaticContacts
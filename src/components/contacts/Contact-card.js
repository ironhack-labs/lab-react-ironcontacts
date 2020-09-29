import React from 'react'

const ContactCard = ({ pictureUrl, name, popularity, deleteContact }) => {

    return (
        <tr>
            <th><img src={pictureUrl} alt={name}></img></th>
            <th>{name}</th>
            <th>{popularity.toFixed(2)}</th>
            <th><button onClick={deleteContact} className='btn-delete'>Delete</button></th>
        </tr>
    )         
}

export default ContactCard
import React from 'react'

const ContactCard = ({ pictureUrl, name, popularity, removeContact }) => {
    return (
        <>
            <tr>
                <td><img src={pictureUrl} alt={name} /></td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td><button onClick={removeContact}>Delete</button></td>
            </tr>
        </>
    )
}

export default ContactCard
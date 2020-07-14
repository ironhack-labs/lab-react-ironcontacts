import React from 'react'

const ContactsCard = ({ name, pictureUrl, popularity, removeContact }) => {
    return (
        <>
            <tr>
                <td><img alt={name} src={pictureUrl} style={{ width: '50px' }} /></td>
                <td><p>{name}</p></td>
                <td><p>{popularity}</p></td>
                <td><button onClick={removeContact}>Delete</button></td>
            </tr>
        </>
    )
}

export default ContactsCard
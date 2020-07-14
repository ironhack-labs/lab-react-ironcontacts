import React from 'react'

const ContactsCard = ({ name, pictureUrl, popularity }) => {
    return (
        <>
            <tr>
                <td><img alt={name} src={pictureUrl} style={{ width: '50px' }} /></td>
                <td><p>{name}</p></td>
                <td><p>{popularity}</p></td>
            </tr>
        </>
    )
}

export default ContactsCard
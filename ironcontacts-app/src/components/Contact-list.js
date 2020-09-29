import React from 'react'



const ContactList = ({ name, pictureUrl, popularity, deleteContact }) => {

    return (
        <>
            <tr>
                <td>
                    <img src={pictureUrl} alt='hola' />
                </td>
                <td >{name}</td>
                <td>{popularity}</td>
                <td><button onClick={deleteContact}>Delete Contact</button></td>

            </tr>
        </>
    )
}

export default ContactList
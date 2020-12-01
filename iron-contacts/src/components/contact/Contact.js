import React from 'react'
import './Contact.css'

const Contact = ({ name, pictureUrl, popularity, deleteOneContact }) => {

    return (
        <tr className='contactLine'>
            <td>
                <figure>
                    <img src={pictureUrl} alt={name} />
                </figure>
            </td>
            <td>
                <p>{name}</p>
            </td>
            <td>
                <p>{popularity}</p>
            </td>
            <td>
                <button onClick={deleteOneContact}>DELETE</button>
            </td>
        </tr>
    )



}

export default Contact;
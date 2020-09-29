import React from 'react'

import './ContactCard.css'

const ContactCard = ({ name, pictureUrl, popularity, removeContact }) => {
    return (
        <>
        
            <tr className="contact">
                <td>{name}</td>

                <td><img className="contactPhoto" src={pictureUrl} alt="contact"/></td>
                
                <td>{popularity}</td>

                <td><button onClick={removeContact}>Delete</button></td>

            </tr>
        
        </>
    )
}



export default ContactCard
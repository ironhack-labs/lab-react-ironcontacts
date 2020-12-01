import React from 'react'

import './ContactCard.css'

const ContactCard = ({name ,pictureUrl, popularity, deleteContact}) => {


    return (

            <tr className="contact">
                <td><img src={pictureUrl} className="picture" alt="contact "/></td>
                <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button onClick={deleteContact} className="delete-btn">Delete contact</button></td>

            </tr>  

    )
}

export default ContactCard
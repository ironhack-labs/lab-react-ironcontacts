import React from 'react'
import './styles/card-contacts.css'

const Card = ({ contactName, contactPicture, contactPopularity, deleteContact}) =>

        <tr>
            <td><img src={contactPicture} className="photo"></img></td>
            <td>{contactName}</td>
            <td>{contactPopularity}</td>
            <td><button onClick={deleteContact}>Delete</button></td>
        </tr>
        

export default Card
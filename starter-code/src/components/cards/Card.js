import React from 'react'
import './Card.css'

const Card = ({ name, pictureUrl, popularity, id, removeContact }) => {
    return (    
            <tr>
                <td><img src={pictureUrl} alt="img" /></td>
                <td><h4>{name}</h4></td>
                <td><h4>{popularity}</h4></td>
            <td><button className="delete" onClick={removeContact}>Eliminar</button></td>
            </tr>                          
    )
}

export default Card
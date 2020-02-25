import React from 'react'
import './Card.css'

const Card = ({ name, pictureUrl, popularity, deleteContact }) => {
    return (
        <tr>
            <td>
                <img className='img' src={pictureUrl} alt={`Foto de ${name}`} />
            </td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={deleteContact}>Delete</button></td>
        </tr>
    )
}

export default Card
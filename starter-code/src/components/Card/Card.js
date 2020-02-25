import React from 'react'
import './Card.css'

const Card = ({ pictureUrl, name, popularity, deleteOne }) => {
    return (
        <tr className='card'>
            <td className='algo'><img src={ pictureUrl } alt={ name }></img></td>
            <td><h6>{ name }</h6></td>
            <td><p>{ popularity }</p></td>
            <td><button onClick={ deleteOne }>Delete</button></td>
        </tr>
    )
}

export default Card
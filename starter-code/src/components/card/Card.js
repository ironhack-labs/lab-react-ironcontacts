import React from 'react'
import './card.css'

const Card = ({ pictureUrl, name, popularity, deleteOne }) => {
    return (
        <tr className="table-row">
            <td><img src={pictureUrl} alt={name} /></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button className="btn btn-danger" onClick={deleteOne}>Delete</button></td>
        </tr>
    )
}

export default Card

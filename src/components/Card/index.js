import React from 'react'

const Card = ({ pictureUrl, name, popularity, idx, onDeleteClick }) => {
    return (
        <tr>
            <td><img alt={name} src={pictureUrl} /></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button className="btnDelete" onClick={() => onDeleteClick()}>Delete</button></td>
        </tr>  
    )
}

export default Card

import React from 'react'

const List = ({ pictureUrl, name, popularity, idx, onDeleteClick }) => {
    return (
        <tr className="center">
            <td><img alt={name} src={pictureUrl} /></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button className="btn btn-outline-danger" onClick={() => onDeleteClick()}>Delete</button></td>
        </tr>  
    )
}

export default List
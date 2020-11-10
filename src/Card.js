import React from 'react'

const Card = ({pictureUrl, name, popularity, clickToDelete}) => {
    return (
        <tr>
            <td><img src={pictureUrl} style={{width:100}} alt="img"/></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button className="delete" onClick={clickToDelete}>Delete</button></td>
        </tr>
    )
}

export default Card
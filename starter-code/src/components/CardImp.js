import React from 'react'

const Card = ({ pictureUrl, name, popularity, removeContact }) => {
    return (
        <li>
            <img src={pictureUrl} alt={name} />
            <p>{name}</p>
            <p>{popularity}</p>
            <button onClick={removeContact}>Delete</button>
        </li>
    )
}

export default Card
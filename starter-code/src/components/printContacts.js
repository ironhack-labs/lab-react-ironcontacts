import React from 'react'
const printContact = (prop) => {
    return (
        <li>
            <img src={prop.pictureUrl} alt={prop.name}></img>
            <p>{prop.name}</p>
            <p>{prop.popularity}</p>
            <button onClick={prop.removeActor}>Delete</button>
        </li>
        
    )
}
export default printContact
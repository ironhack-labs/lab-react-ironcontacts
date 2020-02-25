import React from 'react'
import './Cards.css'

const card = props => {
    return (
    <tr>
        <td>
            <img src={props.pictureUrl} alt={props.name}></img>
        </td>
        <td>
            <h2>{props.name}</h2>   
        </td>
        <td>
            <p>{props.popularity}</p>
        </td>
        <td>
            <button onClick={props.deleteOneContact}>Delete</button>
        </td>
    </tr>
    )
}

export default card
import React from 'react'
import './actors.css'

export const Actors = ({ name,pictureUrl,popularity,deleteActor }) => {

    return (
        <>
        <tr>
            <td><img src={pictureUrl}alt={name} className='imagen'></img></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td><button onClick={deleteActor}>Delete</button></td>
        </tr>
        
       </>
    )
}



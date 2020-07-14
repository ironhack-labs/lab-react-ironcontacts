import React from 'react';
import './actors.css'

export const Actors= ({ name, pictureUrl, popularity}) => {
    return (

        <tr>
            <td><img src={pictureUrl}alt={name} className='img'></img></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
        </tr>

    )
}

export default Actors
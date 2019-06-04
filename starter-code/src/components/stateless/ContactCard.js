import React from 'react'

const card = ({ name, pictureUrl, popularity }) => {
    return (
        <tr>
            <td><img src={pictureUrl} alt="artist"/></td>
            <td><h2>{name}</h2></td>
            <td>{popularity}</td>
        </tr>    
    )
}

export default card
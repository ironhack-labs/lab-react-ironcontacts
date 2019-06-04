import React from 'react'

const card = ({ name, pictureUrl, popularity }) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={pictureUrl} alt="artist"/>
            <p>{popularity}</p>
        </div>    
    )
}

export default card
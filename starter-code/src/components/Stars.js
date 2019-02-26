import React from 'react'



export default function ({ pictureUrl, name, popularity, onClick }) {
    return (
        <div>
    <img src={pictureUrl} alt={name}/>
    <h2>{name}</h2>
    <h2>{popularity}</h2>
    <button onClick={() => onClick(name)}>Delete</button>
        </div>
    )
}
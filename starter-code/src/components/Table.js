import React from 'react'

const Table = ({image, name, popularity, deleteCeleb, celebIndex}) => {
    return (
        <div className="tabla">
            <img src={image} alt={image}/>
            <h5>{name}</h5>
            <p>{popularity}</p>
            <button onClick={() => deleteCeleb(celebIndex)}>Delete</button>
        </div>
    )
}

export default Table

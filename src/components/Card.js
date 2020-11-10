import React from 'react'

const Card = ({pictureUrl, name, popularity, clickToDelete}) => {



    let shortPop = popularity.toFixed(2)
    return (
        <tr>
            <td><img className= "thumbnail" src={pictureUrl} alt=""/></td>
            <td><h2>{name}</h2></td>
            <td><p>{shortPop}</p></td>
            <td><button onClick= {clickToDelete} className= "delete-button">DELETE</button></td>
        </tr>
    )
}

export default Card

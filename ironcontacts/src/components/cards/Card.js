import React from 'react'


const Card = ({ name, pictureUrl, popularity, remove }) => {
    return (
        <>
            <tr>
               <td> <img src={pictureUrl} alt={name}></img></td>
               <td> <h1>{name}</h1></td>
               <td> <p>{popularity}</p></td>
               <td> <button onClick={remove}>Delete</button></td>
            </tr>

        </>
    )
}


export default Card
import React from 'react'
import './card.css'

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
                <button className="coolbutton" onClick={props.deleteOneContact}>Delete</button>
            </td>
        </tr>
    )
}

export default card


//se crea un card.js en el que se construye la card de cada persona,se hace la estructura de la ytabla y se pasa
//los datos mediante props.algo, en este caso se agrega un onclick con una funcion predefinida en el padre.
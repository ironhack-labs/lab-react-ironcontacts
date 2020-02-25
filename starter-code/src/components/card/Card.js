import React from 'react'
import './Card.css'


const Card = props => {
    return (
     
        <tbody>
        <tr>
             <td>
                <img src={props.pictureUrl} alt={`Foto de ${props.name}`}></img>
            </td>
                

            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td>
            <button onClick={props.deleteOneContact}>Eliminar contacto</button>
            
            </td>
           

        </tr>
        </tbody>
       
    )
}

export default Card

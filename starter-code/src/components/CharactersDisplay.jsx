import React from 'react'
import './Characters.css'


const CharactersDisplay = (props)=>{
    return(
        <div className="personita">
            <tr>
            <td><img src={props.pictureUrl} alt="foto"/></td>
            <td>{props.name}</td>
            <td> {props.popularity}</td>
            <td><button onClick={props.delete}>Eliminar</button></td>
            
            
            </tr>
            
        </div>

    )

}

export default CharactersDisplay
import React from 'react'


const card = (props) => {
    return (
        <tr>
            <td><img src={props.pictureUrl} alt="artist"/></td>
            <td><h2>{props.name}</h2></td>
            <td>{props.popularity}</td>
            <td> <button onClick={props.removeContactFromState}>Eliminar</button> </td>
        </tr>    
    )

}

export default card
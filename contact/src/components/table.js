import React from 'react'

function Table(props){
    return(
        <tr>
            <td><img src={props.imageUrl} alt={props.alt} /></td>
            <td><p>{props.name}</p></td>
            <td>{props.popularity}</td>
            <td><button onClick={props.deleteContact}>Eliminar Contacto</button></td>
        </tr>
    )
}

export default Table;

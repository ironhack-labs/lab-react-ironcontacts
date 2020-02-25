import React from 'react'
import './Movie.css'

const card = props => {
    return (

        <tr className="movieCard">
            <td><img src={props.pictureUrl} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button className="btn btn-danger ml-3 shadow" onClick={props.deleteOneMovie}>Delete</button></td>
        </tr>

    )
}

export default card
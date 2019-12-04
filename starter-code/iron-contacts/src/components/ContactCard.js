import React from 'react'

const contacts = props => {
    return (

        <tr>
            <td> <img src={props.pictureUrl} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button onClick={props.deleteCont}>Delete</button></td>
        </tr>

    )

}

export default contacts
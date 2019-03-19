import React from 'react'

const contactCard = props => {
    return (
        <tr>
            <td id="image-with-button"><img src={props.pictureUrl} alt={props.name}></img><button id="delete-button" onClick={props.clickToDelete}>Delete</button></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
        </tr>
    )
}

export default contactCard
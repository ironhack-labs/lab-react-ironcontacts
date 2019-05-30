import React from "react"

function ContactComponent(props) {
    return (
        <tr>
            <td><img src={props.item.pictureUrl} alt={`photo_${props.item.name}`} /></td>
            <td>{props.item.name}</td>
            <td>{props.item.popularity}</td>
            <td><button onClick={props.clickToDelete}>Delete</button></td>
        </tr>
    )
}

export default ContactComponent
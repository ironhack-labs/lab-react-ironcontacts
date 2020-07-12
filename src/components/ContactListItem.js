import React from 'react'

export default function ContactListItem(props) {

    return (
        <tr>
            <td><img src={props.pictureUrl} alt="" style={{width: 50}}/></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button onClick={props.onDelete}>Delete</button></td>
        </tr>
    )
}

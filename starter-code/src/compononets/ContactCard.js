import React from 'react'

export default function ContactCard(props) {
    return (
<tr>
        <td><img src={props.fullContact.pictureUrl} alt="" width="50" height="auto" padding-right="100"/></td>
        <td>{props.fullContact.name}</td>
        <td>{props.fullContact.popularity}</td>
        <td><button onClick={props.clickToDelete}>Delete</button></td>
</tr>
    )
}

import React from 'react'

function ContactCard(props) {
    return (
        <tr>
                    <td>{props.name}</td>
                    <td><img src={props.pictureUrl}/></td>
                    <td>{props.popularity}</td>
                    <td> <button onClick = {() => props.handleDelete(props.id)}>Delete Contact</button></td>
        </tr>
    )
}

export default ContactCard

import React from 'react'

function ContactDetails(props){

    return (
        <>
            <tr>
                <td><img className="pic" src={props.contact.pictureUrl} alt={props.contact.name}/></td>
                <td>{props.contact.name}</td>
                <td>{props.contact.popularity}</td>
                <td><button onClick={() => props.onDelete(props.id)}>Delete</button></td>
            </tr>
        </>

    )
}

export default ContactDetails

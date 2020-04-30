import React from 'react'

export default function IronContacts(props) {

    return (
        <tr>
            <th><img className="img-50" src={props.pictureUrl} /></th>
            <th>{props.name}</th> 
            <th>{props.popularity}</th>
            <th><button onClick={props.delete}>Delete</button></th>
        </tr>
    )
}

import React from 'react'

const Contacts = (props) => {
    console.log(props)
    return (
        <tr>
            <th><img src={props.children.pictureUrl} height="100px"></img></th>
            <th>{props.children.name}</th>
            <th>{props.children.popularity.toFixed(2)}</th>
            <th><button onClick={props.deleteContact}>Delete</button></th>
        </tr>
    )
}

export default Contacts

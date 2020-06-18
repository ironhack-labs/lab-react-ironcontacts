import React, { Component } from 'react'

function IronContacts(props) {
    return (
        <tr>
            <th><img src={props.pictureUrl} alt={props.name}/></th>
            <th>{props.name}</th>
            <th>{props.popularity}</th>
        </tr>
    )
}

export default IronContacts;

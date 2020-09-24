import React from 'react'

export default function contactList(props) {
    return (
            <tr>
                <td><img src={props.pictureUrl} alt="facePicture" height="150px"/></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td>
            </tr>   
    )
}

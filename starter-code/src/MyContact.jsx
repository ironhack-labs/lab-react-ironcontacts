import React from 'react'

export default function Contact(props) {
    return (
        <tr>
            <td><img className="picture" src={props.picture} alt=""/></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
        </tr>
    )
}


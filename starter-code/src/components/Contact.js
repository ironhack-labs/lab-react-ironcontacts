import React from 'react'

export const Contact = (props) => {
    return (
        <tr>
            <td><img src={props.children.pictureUrl} alt="" height={100}/></td>
            <td>{props.children.name}</td>
            <td>{props.children.popularity.toFixed(2)}</td>
            <td><button onClick={props.deleteContact}>Delete</button></td>
        </tr>
    )
}

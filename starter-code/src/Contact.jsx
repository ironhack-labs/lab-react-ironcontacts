import React from 'react'
import Delete from './Delete'

export default function Contact(props) {
    return (
        <tr>
            <td> <img src={props.picture}/> </td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td><button onClick= {() => this.delete(i)}>Delete</button></td>
        </tr>
    )
}

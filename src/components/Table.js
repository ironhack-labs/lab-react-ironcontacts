import React from 'react'

export default function Table(props) {
        return (
        <tr key={props.contact.id}>
            <td><img src={props.contact.pictureUrl} alt="contactpic" style={{width: '85px'}}/></td>
            <td>{props.contact.name}</td>
            <td>{props.contact.popularity.toFixed(2)}</td>
            <td><button onClick={props.deleteContact} className="deleteButton">Delete</button></td>
        </tr> 
        ) 
}
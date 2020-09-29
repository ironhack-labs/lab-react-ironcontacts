import React from 'react'

const ContactRow = (props) => {
    return (
        <tr>
            <td><img src={props.image} alt={props.name} style={{ maxWidth: '50px' }} /> </td>
            <td>{props.name}</td>
            <td>{props.popularity.toFixed(2)}</td>
            <td><button className="btn btn-danger" id={props.id} onClick={props.delete}>Delete</button></td>
        </tr>

    )
}

export default ContactRow
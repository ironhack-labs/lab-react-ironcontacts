import React from 'react'
import Button from './button'

const Contact = props => {

    return (
        <tr>
            <td>
                <img src={props.contact.pictureUrl} alt={props.contact.name} />
            </td>
            <td>{props.contact.name}</td>
            <td>{props.contact.popularity}</td>
            <td>
                <Button
                    onClick={() => props.deleteContact(props.contact)}
                >
                    Delete
        </Button>
            </td>
        </tr>
    )
}

export default Contact
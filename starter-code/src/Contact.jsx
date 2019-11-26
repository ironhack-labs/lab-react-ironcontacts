import React from 'react'

export default function Contact({ picture, name, popularity }) {
    return (
        <tr className="contact">
            <td><img id="img" src={picture} alt="" /></td>
            <td>{name}</td>
            <td>{popularity}</td>
        </tr>
    )
}

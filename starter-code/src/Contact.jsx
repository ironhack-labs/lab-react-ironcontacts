import React from 'react'

export default function Contact({ picture, name, popularity }) {
    return (
        <tr className="contact">
            <td>{picture}</td>
            <td>{name}</td>
            <td>{popularity}</td>
        </tr>
    )
}

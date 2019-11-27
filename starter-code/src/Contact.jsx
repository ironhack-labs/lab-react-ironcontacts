import React from 'react'


export default function Contact({name, pictureUrl, popularity}) {

    return (
        <tr className="contact-row">
            <td><img class="actor-picture" src={`${pictureUrl}`} alt="actor"></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
        </tr>
    )
}

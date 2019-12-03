import React from 'react'

export default function ContactRow(props) {
    const {pictureUrl, name, popularity} = props.contact;
    return (
        <tr>
            <td><img src={pictureUrl} alt='actor' /></td>
            <td>{name}</td>
            <td>{popularity}</td>
        </tr> 
    )
}

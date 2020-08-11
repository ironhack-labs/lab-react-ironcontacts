import React from 'react';




export default function ContactCard(props) {
    const { pictureUrl, name, popularity } = props.contact;
    return (
        <tr>

            <td className='img-td'><img src={pictureUrl} alt={name} /></td>
            <td>{name}</td>
            <td>{popularity.toFixed(1)}</td>
            <td><button className='delete-btn' onClick={props.clickToDelete}>Delete</button></td>


        </tr>
    )
}

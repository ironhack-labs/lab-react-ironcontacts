import React from 'react';

const ContactRow = ({id, pictureUrl, name, popularity, handleDelete}) => {
    return (
        <tr>
            <td>
                <picture>
                    <img width="100" src={pictureUrl} alt={name}/>
                </picture>
            </td>
            <td>
                <h3>{name}</h3>
            </td>
            <td>
                {popularity}
            </td>
            <td>
                <button type="button" onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}

export default ContactRow;
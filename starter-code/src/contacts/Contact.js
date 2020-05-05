import React from 'react';

const Contact = ({ pictureUrl, name, popularity, deleteContact }) => {
    return (
        <tr className="people-list">
            <td>
                <img src={pictureUrl} alt="" />
            </td>
            <td>
                <p>{name}</p>
            </td>
            <td>
                <p>{popularity}</p>
            </td>
            <td>
                <button onClick={deleteContact}>Delete</button>
            </td>
            <hr />
        </tr>

    )
}

export default Contact
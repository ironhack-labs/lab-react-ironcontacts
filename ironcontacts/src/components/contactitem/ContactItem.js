import React from 'react'

const ContactItem = ({name, popularity, pictureUrl, removeContact}) => {
    return (
        <tr>
            <td className="picframe"><img src={pictureUrl} alt={name}></img></td>
            <td>{name}</td>
            <td>{popularity.toFixed(2)}</td>
            <td> <button onClick={removeContact} className="btn btn-light">Delete</button></td>

        </tr>
    )
}

export default ContactItem
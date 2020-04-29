import React from 'react';

const Contact = ({deleteHandler, pictureUrl, name, popularity}) => {
    
    return (
        <tr>
            <td><img src={pictureUrl} alt={name}/></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={deleteHandler}>Delete</button></td>
        </tr>
    )
}

export default Contact;
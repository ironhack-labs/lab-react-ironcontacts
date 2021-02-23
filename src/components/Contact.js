import React from 'react';

const Contact = ({name, pictureUrl, popularity, clickToDelete}) => {
    return (
    <tr>
        <td><img src={pictureUrl} alt={name} className="profile-img"/></td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td><button onClick={clickToDelete}>Delete</button></td>
      </tr>
    )
};

export default Contact;
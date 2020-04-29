import React, { Component } from 'react';

const Contact = ({
    name,
    pictureUrl,
    popularity,
    id,
    removeContact
}) => 
    <tr id={id}>
        <td><img src={pictureUrl} alt={name}/></td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td><button onClick={() => removeContact(id)}>Delete</button></td>
    </tr>
    
export default Contact;

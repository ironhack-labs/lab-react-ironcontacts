import React from 'react';
import contacts from './contacts.json';


const ContactList=  props => {
    const { pictureUrl, name, popularity, id } = contacts;
    return (
        <tr>
            <td className='img-td'><img src={pictureUrl} alt={props.name} /></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><button onClick={props.clickToDelete(id)}>Delete</button></td>

        </tr>
    )
}

export default ContactList;

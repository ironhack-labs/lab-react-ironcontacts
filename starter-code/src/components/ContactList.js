import React from 'react';

const ContactList = props => {
    console.log(props);
    
    return (
        <table className='ContactList'>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.map( (contact, idx) => (
                    <tr key={idx}>
                        <td><img src={contact.pictureURL} alt={contact.name} width={100} /></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity}</td>
                    </tr>
                 ))}
            </tbody>
        </table>
    )
}

export default ContactList;
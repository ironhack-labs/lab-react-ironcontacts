import React from 'react'

const ContactList = (props) => {
    //console.log(props.state);

    return (
        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.map(contact => {
                    return (
                        <tr key={contact.id}>
                            <td><img src={contact.pictureUrl} height='100px' alt={contact.name}/></td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity.toFixed(2)}</td>
                            <td>
                                <button onClick={() => {props.deleteContact(contact.id)}}>
                                    Detele
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        );
}

export default ContactList
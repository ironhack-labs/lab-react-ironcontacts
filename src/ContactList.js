import React from 'react';

const ContactList = (props) => {
    const contacts = props.contacts;
    return (
        <div>
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
                    {contacts.map((contact,) => {
                        return (
                            <tr key={contact.id}>
                                <td>
                                    <img
                                        src={contact.pictureUrl}
                                        height="100px"
                                        alt={contact.name}
                                    />
                                </td>
                                <td>
                                    {contact.name}
                                </td>
                                <td>
                                    {contact.popularity.toFixed(2)}
                                </td>
                                <td>
                                    <button onClick={() => {
                                        props.deleteContact(index)
                                    }}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default ContactList;
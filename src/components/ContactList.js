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
                </tr>
            </thead>
            <tbody>
                {props.contacts.map(contact => {
                    return (
                        <tr key={contact.id}>
                            <td><img src={contact.pictureUrl} height='100px' alt={contact.name}/></td>
                            <td>{contact.name}</td>
                            <td>Popularity:{contact.popularity}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        );
}

export default ContactList
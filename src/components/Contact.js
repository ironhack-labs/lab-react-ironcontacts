import contacts from '../contacts.json';
import React, { useState } from 'react';

function ContactTable() {

    const [contact, setContact] = useState(contacts);

    const [emoji, setEmoji] = useState('');
    return (
        <div>
            <h1>Producers' Contacts</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">Popularity</th>
                        <th scope="col">Won Oscar</th>
                        <th scope="col">Won Emmy</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contact.map(contacts => {
                            return (
                                <tr key={contacts.id}>
                                    <td>
                                        <img src={contacts.pictureUrl} class="img-thumbnail" style={{ width: "100px", height: '100px' }} alt="producer"></img>
                                    </td>
                                    <td>{contacts.name}</td>
                                    <td>{contacts.popularity}</td>
                                    <td>
                                        {(contacts.wonOscar) ? '🏆' : ''}
                                    </td>
                                    <td>
                                        {(contacts.wonEmmy) ? '🌟' : ''}
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>


        </div >
    )
}


export default ContactTable;

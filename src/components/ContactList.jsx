import React, { useState } from 'react';
import './ContactList.css';

function ContactList(props) {
    const [initialContacts, setInitialContacts] = useState(props.contacts.slice(0, 5));

    const initialContactsLi = initialContacts.map((contact, i) => (
        <tr key={contact.name}>
            <td><img src={contact.pictureUrl} alt="avatar" className="smallPicture" /></td>
            <td><p>{contact.name}</p></td>
            <td><p>{contact.popularity.toFixed(2)}</p></td>
            <td><button className="deleteButton" onClick={() => deleteContact(contact)}>Delete</button></td>
        </tr>
    ));

    const generateRandom = () => {
        const randomNumber = Math.floor(Math.random() * props.contacts.length);
        const randomContact = props.contacts[randomNumber];
        setInitialContacts([...initialContacts, randomContact]);

    };

    const sortByName = () => {
        const sortedByName = initialContacts.sort((a, b) => (a.name > b.name) ? 1 : -1);
        setInitialContacts([...sortedByName]);
    };

    const sortByPopularity = () => {
        const sortedByPopularity = initialContacts.sort((a, b) => (b.popularity - a.popularity));
        setInitialContacts([...sortedByPopularity]);
    };

    const deleteContact = (contactToDelete) => {
        const arrayDeleted = initialContacts.filter(contact => contact.name !== contactToDelete.name);
        setInitialContacts([...arrayDeleted]);
    }

    return (
        <div className="ContactList">
            <div className="buttonGroup">
                <button onClick={() => generateRandom()}>Add Random Contact</button>
                <button onClick={() => sortByName()}>Sort by Name</button>
                <button onClick={() => sortByPopularity()}>Sort by Popularity</button>
            </div>
            <table>
                <tbody>
                    <tr key='title'>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    {initialContactsLi}
                </tbody>
            </table>
        </div>
    );
}

export default ContactList;
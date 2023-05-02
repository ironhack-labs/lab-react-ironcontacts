import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";
import contactsData from "./contacts.json";

function App() {
    const [firstFiveContacts, setFirstFiveContacts] = useState(
        contacts.slice(0, 5)
    );

    // const [contactsList, setContactsList] = useState(contacts);
    const [remainingContacts, setRemainingContacts] = useState(
        contactsData.slice(5)
    );

    const addRandomContact = () => {
        if (remainingContacts.length > 0) {
            const randomIndex = Math.floor(
                Math.random() * remainingContacts.length
            );
            const randomContact = remainingContacts[randomIndex];
            setFirstFiveContacts([...firstFiveContacts, randomContact]);
        }
    };
    const sortByName = () => {
        const sortedContacts = [...firstFiveContacts].sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
        setFirstFiveContacts(sortedContacts);
    };

    const sortByPopularity = () => {
        const sortedContacts = [...firstFiveContacts].sort(
            (a, b) => b.popularity - a.popularity
        );
        setFirstFiveContacts(sortedContacts);
    };

    const deleteContact = (id) => {
        setFirstFiveContacts(
            firstFiveContacts.filter((contact) => contact.id !== id)
        );
        setRemainingContacts([
            ...remainingContacts,
            firstFiveContacts.find((contact) => contact.id === id),
        ]);
    };

    return (
        <div className="App">
            <h1 className="contact-list-title">My Contacts</h1>
            <div className="buttons">
                <button onClick={addRandomContact}>Add Random Contact</button>
                <button onClick={sortByName}>Sort by Name</button>
                <button onClick={sortByPopularity}>Sort by Popularity</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won an Oscar</th>
                        <th>Won an Emmy</th>
                    </tr>
                </thead>
                <tbody>
                    {firstFiveContacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>
                                <img
                                    src={contact.pictureUrl}
                                    alt={contact.name}
                                    height="100"
                                />
                            </td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity.toFixed(2)}</td>
                            <td>
                                {contact.wonOscar ? <span> 🏆</span> : null}
                            </td>
                            <td>{contact.wonEmmy ? <span> 🏆</span> : null}</td>
                            <td>
                                <button
                                    onClick={() => deleteContact(contact.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
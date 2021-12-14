import React from 'react';
import { useState } from 'react';

import contacts from './contacts.json';

function App() {
    const fiveContacts = contacts.slice(0, 5);

    const [addContact, setAddContact] = useState(fiveContacts);

    const randomContact = c => {
        const getRandomContact = c[Math.floor(Math.random() * c.length)];

        return setAddContact([...addContact, getRandomContact]);
    };

    const sortByName = c => {
        const sortedNames = c.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        });
        return setAddContact([...addContact, sortedNames]);
    };

    const sortByPopularity = c => {
        const sortedPopular = c.sort((a, b) => {
            return b.popularity - a.popularity;
        });
        return setAddContact([...addContact, sortedPopular]);
    };

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h1>Iron Contacts</h1>
                <button onClick={() => randomContact(contacts)}>
                    Add Random Contact
                </button>
                <button onClick={() => sortByName(addContact)}>
                    Sort by Name
                </button>
                <button onClick={() => sortByPopularity(addContact)}>
                    Sort by Popularity
                </button>
                <table style={{ margin: 'auto' }}>
                    <th>
                        <h1>Picture</h1>
                    </th>
                    <th>
                        <h1>Name</h1>
                    </th>
                    <th>
                        <h1>Popularity</h1>
                    </th>
                    <tbody>
                        {addContact.map(elemento => {
                            return (
                                <tr key={elemento.id}>
                                    <td>
                                        <img
                                            src={elemento.pictureUrl}
                                            width="150"
                                        />
                                    </td>
                                    <td>
                                        <h2>{elemento.name}</h2>
                                    </td>
                                    <td>{elemento.popularity}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default App;

import { useState } from 'react';
import './App.css';
import contactsList from './contacts.json';

function App() {
    const [contacts, setContacts] = useState([...contactsList.slice(0, 5)]);

    const addContact = () => {
        setContacts((prevState) => {
            return [...prevState, contactsList[contacts.length]];
        });
    };

    const sortByName = () => {
        setContacts((prevState) => {
            return [...prevState].sort((a, b) => a.name.localeCompare(b.name));
        });
    };

    const sortByPopularity = () => {
        setContacts((prevState) => {
            return [...prevState].sort((a, b) => b.popularity - a.popularity);
        });
    };

    const deleteActor = (id) => {
        setContacts((prevState) => {
            return [...prevState].filter((actor) => actor.id !== id);
        });
    };

    return (
        <div className='App'>
            <h1>IronContacts</h1>
            <button className='btn' onClick={addContact}>
                Add Random Contact
            </button>
            <button className='btn' onClick={sortByPopularity}>
                Sort by popularity
            </button>
            <button className='btn' onClick={sortByName}>
                Sort by name
            </button>
            <table>
                <thead>
                    <tr>
                        <th>picture</th>
                        <th>name</th>
                        <th>popularity</th>
                        <th>won oscar</th>
                        <th>won emmy</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>
                                <img src={contact.pictureUrl} alt='contact' />
                            </td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity}</td>
                            {contact.wonOscar ? <td>🏆</td> : <td></td>}
                            {contact.wonEmmy ? <td>🏆</td> : <td></td>}
                            <td>
                                <button
                                    className='btn-actions'
                                    onClick={() => deleteActor(contact.id)}
                                >
                                    delete
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

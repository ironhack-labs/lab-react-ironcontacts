import { useState } from "react"
import logo from './logo.svg';
import './App.css';
import contactList from './contacts.json'

function App() {
    const firstFive = contactList.slice(0, 5)
    const [contacts, setContacts] = useState(firstFive);

    function addContact() {
        const randomContact = contactList[Math.floor(Math.random() * contactList.length)];
        setContacts([randomContact, ...contacts])
    }

    function sortbyPopularity() {
        const sorted = [...contacts].sort(function (a, b) { return a.popularity < b.popularity ? 1 : -1 })
        setContacts(sorted)
    }
    function sortbyName() {
        const sortedName = [...contacts].sort(function (a, b) { return a.name > b.name ? 1 : -1 })
        setContacts(sortedName)

    }

    function DeleteContact(id) {
        const filteredcontact = contacts.filter((contact) => {
            return contact.id !== id;
        });
        return setContacts(filteredcontact)
    }

    return (
        <>
            <div className='titles'>
                <h1 >Iron Contacts</h1>
                <button onClick={addContact}>Add Random Contact </button>
                <button onClick={sortbyPopularity}>Sort By popularity</button>
                <button onClick={sortbyName}>Sort by name</button>
            </div>
            <div className="App center" >
                {/* <div key={contacts.id}> */}
                <table >
                    <thead>
                        <tr>
                            <th><h3>Picture</h3></th>
                            <th><h3>Name</h3></th>
                            <th><h3>Popularity</h3></th>
                            <th><h3>Won an Oscar</h3></th>
                            <th><h3>Won an Emmy</h3></th>
                        </tr>
                    </thead>
                    {contacts.map(contact => {
                        return (
                            <tbody>
                                <tr>
                                    <td><img src={contact.pictureUrl} alt="img" /></td>
                                    <td> <h3>{contact.name}</h3></td>
                                    <td><h5> {contact.popularity}</h5></td>
                                    <td> {contact.wonOscar ? <h5>🏆 </h5> : <h5></h5>}</td>
                                    <td> {contact.wonEmmy ? <h5>🏆 </h5> : <h5></h5>}</td>
                                    <button onClick={() => DeleteContact(contact.id)} className="btn-delete">
                                        Delete 🗑
                                    </button>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
                {/* </div> */}
            </div>
        </>
    );
};

export default App;

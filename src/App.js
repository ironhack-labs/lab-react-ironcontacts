import "./App.css";
import contacts from "./contacts.json";
import React from "react";

const firstContacts = contacts.slice(0, 5);

function App() {
    // console.log(contacts);

    const [contactList, setContactlist] = React.useState(firstContacts);
    console.log("HALLLOOO", contactList);
    const addRandomContact = () => {
        const randomContact =
            contacts[Math.floor(Math.random() * contacts.length)];
        const addRandom = contactList.concat(randomContact);
        if (!contactList.includes(randomContact)) {
            setContactlist(addRandom);
        }
    };

    const sortByName = () => {
        const sortName = [...contactList].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        setContactlist(sortName);
    };

    const sorByPopularity = () => {
        const sortPopularity = [...contactList].sort((a, b) => {
            return b.popularity - a.popularity;
        });
        setContactlist(sortPopularity);
    };

    // https://www.robinwieruch.de/react-remove-item-from-list

    const removeContact = (id) => {
        const newList = contactList.filter((el) => el.id !== id);

        setContactlist(newList);
    };

    return (
        <div className="App">
            <h1>IronContacts</h1>
            <button onClick={addRandomContact}>Add Random Contact</button>
            <button onClick={sortByName}>Sort by Name</button>
            <button onClick={sorByPopularity}>Sort by Popularity</button>

            <table>
                <tbody>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>

                    {contactList.map((el) => {
                        return (
                            <tr key={el.id}>
                                <td>
                                    <img width="70px" src={el.pictureUrl} />
                                </td>
                                <td>{el.name}</td>
                                <td>{el.popularity.toFixed(2)}</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() => removeContact(el.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default App;

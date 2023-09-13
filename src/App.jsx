import React, { useState } from "react";
import "./App.css";
import contactsData from "./contacts.json";

function App() {
    const [displayedContacts, setDisplayedContacts] = useState(
        contactsData.slice(0, 5)
    );
    const [remainingContacts, setRemainingContacts] = useState(
        contactsData.slice(5)
    );
    const [sortCriteria, setSortCriteria] = useState("name");
    const [sortOrder, setSortOrder] = useState("asc");

    const addRandomContact = () => {
        const randomIndex = Math.floor(
            Math.random() * remainingContacts.length
        );
        const randomContact = remainingContacts[randomIndex];

        setDisplayedContacts((prevDisplayedContacts) => [
            ...prevDisplayedContacts,
            randomContact,
        ]);
        setRemainingContacts((prevRemainingContacts) =>
            prevRemainingContacts.filter(
                (contact) => contact.id !== randomContact.id
            )
        );
    };

    const sortContacts = (criteria) => {
        let sortedContacts = [...displayedContacts];

        if (criteria === sortCriteria) {
            sortedContacts.reverse();
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            if (criteria === "name") {
                sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
            } else if (criteria === "popularity") {
                sortedContacts.sort((a, b) => b.popularity - a.popularity);
            }

            setSortCriteria(criteria);
            setSortOrder("asc");
        }

        setDisplayedContacts(sortedContacts);
    };

    const deleteContact = (charId) => {
        const newCharList = displayedContacts.filter((e) => {
            return charId !== e.id;
        });
        setDisplayedContacts(newCharList);
    };

    return (
        <div className="App">
            <h1>LAB | React IronContacts</h1>
            <button onClick={addRandomContact}>Add Random Contact</button>
            <button onClick={() => sortContacts("name")}>Sort by Name</button>
            <button onClick={() => sortContacts("popularity")}>
                Sort by Popularity
            </button>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Won Oscar</th>
                        <th>Won Emmy</th>
                        <th>Action</th>{" "}
                    </tr>
                </thead>
                <tbody>
                    {displayedContacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>
                                <img
                                    src={contact.pictureUrl}
                                    alt={contact.name}
                                    style={{ width: "100px", height: "auto" }}
                                />
                            </td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity.toFixed(2)}</td>
                            <td>{contact.wonOscar ? "🏆" : ""}</td>
                            <td>{contact.wonEmmy ? "🏆" : ""}</td>
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

import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

function App() {
    const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));

    const remainingContacts = contacts.slice(5, contacts.length);

    const firstFiveCopy = structuredClone(firstFive);

    const addRandomContact = () => {
        
      // Tried several options, none were working correctly
      // Too tired to try more
    };

    const sortAlphabetically = () => {
        //users.sort((a, b) => a.firstname.localeCompare(b.firstname))
        firstFiveCopy.sort((a, b) => a.name.localeCompare(b.name));
        setFirstFive(firstFiveCopy);
    };

    const sortPopularity = () => {
        firstFiveCopy.sort((a, b) => b.popularity - a.popularity);
        setFirstFive(firstFiveCopy);
    };

    const removeContact = (nameElm) => {
        const newArray = firstFive.filter((elm) => elm.name !== nameElm);
        setFirstFive(newArray);
    };

    return (
        <div className="App">
            <h1>LAB | React IronContacts</h1>
            {/* <button onClick={addRandomContact}>Add Random Contact</button> */}
            <button onClick={sortAlphabetically}>Sort by name</button>
            <button onClick={sortPopularity}>Sort by Popularity</button>
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won Oscar</th>
                    <th>Won Emmy</th>
                    <th>Actions</th>
                </tr>

                {firstFive.map((contactObj) => {
                    return (
                        <tr>
                            <td>
                                <img src={contactObj.pictureUrl} />
                            </td>
                            <td>{contactObj.name}</td>
                            <td>{Math.round(contactObj.popularity * 100) / 100}</td>
                            <td>{contactObj.wonOscar ? "🏆" : ""} </td>
                            <td>{contactObj.wonEmmy ? "🌟" : ""} </td>
                            <td>
                                <button
                                    onClick={() => {
                                        removeContact(contactObj.name);
                                    }}
                                >
                                    Remove Contact
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default App;

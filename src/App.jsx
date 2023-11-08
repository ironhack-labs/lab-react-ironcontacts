import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

function App() {
    const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));

    const firstFiveCopy = structuredClone(firstFive);

    const sortAlphabetically = (() => {
      //users.sort((a, b) => a.firstname.localeCompare(b.firstname))
      firstFiveCopy.sort((a, b) => a.name.localeCompare(b.name));
      setFirstFive(firstFiveCopy);
    });

    return (
        <div className="App">
            <h1>LAB | React IronContacts</h1>
            <button onClick={sortAlphabetically}>Sort by name</button>
            <button>Sort by Popularity</button>
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won Oscar</th>
                    <th>Won Emmy</th> 
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
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default App;

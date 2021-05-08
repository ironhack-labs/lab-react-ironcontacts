import "./App.css";
import contacts from "./contacts.json";
import React from "react";

function App() {
    // console.log(contacts);

    const [contact, setContact] = React.useState(contacts.slice(0, 5));

    return (
        <div className="App">
            <h1>IronContacts</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>

                    {contacts.map((contact) => {
                        return (
                            <tr key={contact.id}>
                                <td>
                                    <img
                                        width="70px"
                                        src={contact.pictureUrl}
                                    />
                                </td>
                                <td>{contact.name}</td>
                                <td>{contact.popularity.toFixed(2)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default App;

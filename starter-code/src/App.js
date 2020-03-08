import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';


class App extends Component {
    state = {
        contacts: contacts.slice(0, 5)
    }

    render() {
        const { contacts } = this.state;
        return (
            <>
                <div className="App">
                    <h1>IronContacts</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((contact, i) => (
                                <tr key={i}>
                                    <td>
                                        <img src={contact.pictureUrl} width="60" alt={contact.name} />
                                    </td>
                                    <td>{contact.name}</td>
                                    <td>{contact.popularity.toFixed(2)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </>
        );
    }
}

export default App;

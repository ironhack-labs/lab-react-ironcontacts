import React from 'react';
import './App.css';
import contacts from './contacts.json';
import Contacts from './ContactsComponent';

function App() {
    return (
        <div className="App">
            <h1>Contacts</h1>
            <table>
                <tr>
                    <th>Pictures</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            </table>

            <Contacts/>
        </div>
    );
}

export default App;

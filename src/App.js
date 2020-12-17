import React from 'react';
import './App.css';
import ContactList from './components/ContactList';

const App = ()  => {
    return (
        <div className="app">
            <h1>Ironcontacts</h1>
            <ContactList />
        </div>
    )
}

export default App;


// APP.js
import React from 'react'
import Contacts from './components/Contacts';
import './App.css';
import contacts from "./contacts.json";






const App = () => {
    return (
        <div>
            <h1> IronContacts </h1>
            
            <Contacts allContacts={contacts} />

        </div>
    )
}





export default App

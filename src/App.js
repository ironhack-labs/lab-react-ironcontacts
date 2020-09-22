import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactInfo from './Component/Contact';
/**
 *
 */
function App() {
  console.log(' My Contacts: ', contacts.slice(0, 5));
  return (
    <div>
      <h1> Iron Contacts </h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.slice(0, 5).map((contact) => ContactInfo(contact))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

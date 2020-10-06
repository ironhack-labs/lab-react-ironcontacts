import React from 'react';
import './App.css';
import contacts from './contacts.json';

console.log(contacts.slice(0, 5));
const firstFive = contacts.slice(0, 5);

function FirstFive() {
  return (
    <div className="FirstFive">
      {firstFive.map((contact) => (
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          <tbody>
            <td>
              <img src={contact.pictureUrl} alt="pics" />
            </td>
            <td> {contact.name} </td>
            <td> {contact.popularity} </td>
          </tbody>
        </table>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <FirstFive />
    </div>
  );
}

export default App;

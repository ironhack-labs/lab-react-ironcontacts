
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

/* */

import "./App.css";

import contacts from "./contacts.json";
import { useState } from 'react';

function App() {

  const [statefulContacts, setContacts] = useState(contacts.slice(0,5))

  const contactsRemaining = contacts.filter(contact => !statefulContacts.includes(contact))

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function addRandomContact() {
    setContacts([...statefulContacts, contactsRemaining[getRandomInt(contactsRemaining.length)] ])
  }

  // add a unique key to each tr otherwise React complains in Chrome console:
  // Warning: Each child in a list should have a unique "key" prop.
  // https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
  // so that React can handle DOM changes...

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}> Add Random Contact </button>
      <table className="table-centered">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
            {statefulContacts.map((contact, i) => {
              return (
                <tr key={i}>
                  <td><img src={contact.pictureUrl} alt={`portrait of ${contact.name}`} width="50px"/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>{contact.wonOscar && "🏆"}</td>
                  <td>{contact.wonEmmy && "🏆"}</td>
                </tr>
              )
            })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
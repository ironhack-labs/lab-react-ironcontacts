
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

  return (
    <div className="App">
      <h1>IronContacts</h1>
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
            {statefulContacts.map(contact => {
              return (
                <tr>
                  <td><img src={contact.pictureUrl} alt={`"photo of ${contact.name}"`} width="50px"/></td>
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
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

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
//       <table>
//         <th>Picture</th><th>Name</th><th>Popularity</th>
//         <tr>
//           <td></td>
//         </tr>
//       </table>
//     </div>
//   );
// }

const App = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((el, i) => {
          return (
            <tr key={contacts[i].id}>
              <td>
                <img src={contacts[i].pictureUrl} />
              </td>
              <td>{contacts[i].name}</td>
              <td>{contacts[i].popularity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default App;

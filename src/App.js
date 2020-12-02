import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

let stateContacts = contacts.splice(0, 5);

class App extends React.Component {
  state = {
    stateContacts,
  };

  randomContact() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    stateContacts.push(randomContact);
    this.setState({
      stateContacts,
    });
  }

  sortByName() {
    stateContacts = stateContacts.sort((a, b) => (a.name > b.name ? 1 : -1));
    // a.name.localeCompare(b.name));
    this.setState({
      stateContacts,
    });
  }

  sortByPopularity() {
    stateContacts = stateContacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      stateContacts,
    });
  }

  removeUser(index) {
    stateContacts.splice(index, 1);
    this.setState({
      stateContacts,
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div className="app">
        <h1>Ironhack Contacts</h1>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>
            {stateContacts.map((user, i) => (
              <tr key={user.name}>
                <td key={user.pictureUrl}>
                  <img style={{ width: `50px` }} src={user.pictureUrl}></img>
                </td>
                <td key={user.name}>{user.name}</td>
                <td key={user.popularity}>{user.popularity.toFixed(2)}</td>
                <td key={i}>
                  <button onClick={() => this.removeUser(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => this.randomContact()}>Add celebrity</button>
        <button onClick={() => this.sortByName()}>sort by name</button>
        <button onClick={() => this.sortByPopularity()}>
          sort by popularity
        </button>
      </div>
    );
  }
}

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

export default App;

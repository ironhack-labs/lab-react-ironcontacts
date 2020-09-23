import React from 'react';
import './App.css';
import contacts from './contacts.json';
import CelebritiesList from './Components/CelebritiesList';

class App extends React.Component {
  state = {
    celebrities: contacts.slice(0, 5),
  };

  addRandom = () => {
    //alternative
    const celebritiesCopy = this.state.celebrities.slice();
    celebritiesCopy.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({
      celebrities: celebritiesCopy,
    });
  };

  sortName = () => {};

  sortPopularity = () => {};

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <CelebritiesList celebrities={this.state.celebrities} />
        </table>
      </div>
    );
  }
}

export default App;

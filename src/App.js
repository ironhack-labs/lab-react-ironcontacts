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

  sortedName = () => {
    const sortedList = this.state.celebrities.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      celebrities: sortedList,
    });
  };

  sortedPopularity = () => {
    const sortedPopularity = this.state.celebrities.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    this.setState({
      celebrities: sortedPopularity,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortedName}>Sort by name</button>
        <button onClick={this.sortedPopularity}>Sort by popularity</button>
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

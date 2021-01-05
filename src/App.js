import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    displayFive: [...contacts].slice(0, 5),
  };

  getRandomCelebrity = () => {
    // console.log('click!');
    const randomJson = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(randomJson);
    this.setState({
      displayFive: [...this.state.displayFive, randomJson],
    });
  };
  sortByName = () => {
    this.setState({
      displayFive: [
        ...this.state.displayFive.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        }),
      ],
    });
  };
  sortByPopularity = () => {
    this.setState({
      displayFive: [
        ...this.state.displayFive.sort(function (a, b) {
          if (a.popularity < b.popularity) {
            return 1;
          }
          if (a.popularity > b.popularity) {
            return -1;
          }
          return 0;
        }),
      ],
    });
  };
  deleteOne = (celebrity) => {
    this.setState({
      displayFive: this.state.displayFive.filter((p) => p.id !== celebrity.id),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.getRandomCelebrity} key={contacts.id}>
          Random
        </button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.displayFive.map((celebrities) => {
              return (
                <tr key={celebrities.id}>
                  <td>
                    <img
                      className="picturesSize"
                      src={celebrities.pictureUrl}
                      alt="Celebrity"
                    />
                  </td>
                  <td>{celebrities.name}</td>
                  <td>{celebrities.popularity.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => this.deleteOne(celebrities)}
                      key={celebrities.id}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

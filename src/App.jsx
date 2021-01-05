import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    fiveActors: contacts.slice(0, 5),
  };

  getRandomActor = () => {
    console.log('clicked');
    const randomActor = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      fiveActors: [...this.state.fiveActors, randomActor],
    });
  };

  sortByName = () => {
    console.log('clicked too');
    this.setState({
      fiveActors: [
        ...this.state.fiveActors.sort(function (a, b) {
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
    console.log('clicked three');
    this.setState({
      fiveActors: [
        ...this.state.fiveActors.sort(function (a, b) {
          return a.popularity - b.popularity;
        }),
      ],
    });
  };

  removeActor = (actor) => {
    console.log('removed');
    this.setState({
      fiveActors: this.state.fiveActors.filter((c) => c.id !== actor.id),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>

        <div className="btn">
          <button className="add" onClick={this.getRandomActor}>
            Add Contact
          </button>

          <button className="sort" onClick={this.sortByName}>
            Sort by name
          </button>

          <button className="sort" onClick={this.sortByPopularity}>
            Sort by 💛
          </button>
        </div>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            {this.state.fiveActors.map((contact) => {
              return (
                <tbody>
                  <tr key={contact.id}>
                    <td>
                      <img
                        className="image"
                        src={contact.pictureUrl}
                        style={{ width: 50 }}
                        alt={contact.name}
                      />
                    </td>
                    <td>{contact.name}</td>
                    <td>💛 </td>
                    <td>{contact.popularity.toFixed(2)}</td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => this.removeActor(contact)}
                        key={contact.id}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default App;

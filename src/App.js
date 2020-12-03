import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contactList: contacts.slice(0, 5),
  };

  addRandom = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newArray = [...this.state.contactList, randomContact];
    this.setState({
      contactList: newArray, //Never update state directly, we need to call this.setState.
    });
  };

  sortByName = () => {
    const copyOfState = [...this.state.contactList];
    const sortedByName = copyOfState.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contactList: sortedByName,
    });
  };

  sortByPopularity = () => {
    const newCopy = [...this.state.contactList];
    const sortedByPopularity = newCopy.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contactList: sortedByPopularity,
    });
  };

  deleteActor = (name) => {
    const listWithoutActor = this.state.contactList.filter((actor) => {
      return actor.name !== name;
    });

    this.setState({
      contactList: listWithoutActor,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.addRandom}>Add celeb</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          {this.state.contactList.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button
                    onClick={() => {
                      return this.deleteActor(contact.name);
                    }}
                  >
                    Delete me
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;

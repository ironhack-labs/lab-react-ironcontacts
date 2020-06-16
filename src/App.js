import React from 'react';
import logo from './logo.svg';
import contacts from './contacts.json';
import './App.css';

class App extends React.Component {
  state = {
    data: contacts.slice(0, 5),
    cIndex: [...contacts.slice(0, 5).map((contact) => contact.id)]
  };

  getRandomIndex = () => {
    return Math.floor(Math.random() * contacts.length);
  }

  addRandomContact = () => {
    let newArr = contacts.filter((contact) => {
      let bool = false;
      for (let i = 0; i < this.state.data.length; i++) {
        if (contact.id == this.state.data[i].id) {
          bool = true;
        }
      }
      if (!bool) {
        return contact
      }
    })
    let index = this.getRandomIndex();
    console.log(index)
    while (this.state.cIndex.includes(index)) {
        index = this.getRandomIndex();
    }
    let newContact = contacts[index];
    console.log(newContact)
    this.setState({
      data: [...this.state.data, newContact],
      cIndex: [...this.state.cIndex, index]
    });
  };

  sortByName = () => {
    this.setState({
      data: [...this.state.data].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    });
  };

  sortByPopularity = () => {
    const newContacts = [...this.state.data];
    newContacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      } else if (a.popularity > b.popularity) {
        return 1;
      }
      return 0;
    });

    this.setState({
      data: newContacts,
    });
  };

  delete = (index) => {
    const newContacts = [...this.state.data];
    newContacts.splice(index, 1);
    
    this.setState({
      data: newContacts,
    });
  };

  render() {
    console.log(this.state.cIndex)
    return (
      <div className="App">
        <header className="App-header">
          <h1>IronContacts</h1>

          <button onClick={this.addRandomContact}>Add Random Contact</button>

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
              {this.state.data.map((contact, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        style={{ width: '50%', margin: '0' }}
                        src={contact.pictureUrl}
                      />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td>
                      <button onClick={() => this.delete(index)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;

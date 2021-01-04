import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState((state) => {
      return { contacts: [...state.contacts, randomContact] };
    });
  };

  sortByName = () => {
    this.setState((state) => {
      const newContacts = [...state.contacts].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });

      return { contacts: newContacts };
    });
  };

  sortByPopularity = () => {
    this.setState((state) => {
      const newContacts = [...state.contacts].sort((a, b) => {
        return b.popularity - a.popularity;
      });
      return { contacts: newContacts };
    });
  };

  deleteContact = () => {
    this.setState((state) => {
      const contactIndex = [...state.contacts].map((contact, index) => {
        return index;
      });
      console.log(contactIndex);
    });

    // const deleteContact = [...state.contacts].shift(contactIndex);
    // this.setState((state) => {
    //   return { contacts: [...state.contacts] };
    // });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add random contact</button>
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
            {this.state.contacts.map((celeb) => {
              return (
                <tr key={celeb.id}>
                  <td>
                    <img src={celeb.pictureUrl} />
                  </td>
                  <td>{celeb.name}</td>
                  <td>{celeb.popularity}</td>
                  <td>
                    <button onClick={this.deleteContact()}>Delete</button>
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

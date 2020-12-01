import React from 'react';
import './App.css';
import contacts from './contacts.json';
import 'bulma/css/bulma.css';

class App extends React.Component {
  state = {
    contactsList: contacts.slice(0, 5),
  };

  randomContact = () => {
    const randomPickedContact =
      contacts[Math.floor(Math.random() * contacts.length)];
    return randomPickedContact;
  };

  addRandomContact = () => {
    const newContactsList = [...this.state.contactsList];
    newContactsList.push(this.randomContact());
    this.setState({
      contactsList: newContactsList,
    });
  };

  sortContactsByName = () => {
    const sortedByName = [...this.state.contactsList];
    sortedByName.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return sortedByName;
    });
    this.setState({
      contactsList: sortedByName,
    });
  };

  sortContactsByPopularity = () => {
    const sortedByPopularity = [...this.state.contactsList];
    sortedByPopularity.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return sortedByPopularity;
    });
    this.setState({
      contactsList: sortedByPopularity,
    });
  };

  deleteContact = (index) => {
    const reducedList = [...this.state.contactsList];
    reducedList.splice(index, 1);
    this.setState({
      contactsList: reducedList,
    });
  };

  render() {
    return (
      <div className="App">
        <section class="hero is-medium is-dark">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title is-1 mb-6">IronContacts</h1>
              <div class="buttons is-grouped is-centered">
                <p class="control">
                  <button
                    class="button is-link is-inverted is-outlined"
                    onClick={() => this.addRandomContact()}
                  >
                    Add Random Contact
                  </button>
                </p>
                <p class="control">
                  <button
                    class="button is-link is-inverted is-outlined"
                    onClick={() => this.sortContactsByName()}
                  >
                    Sort by name
                  </button>
                </p>
                <p class="control">
                  <button
                    class="button is-link is-inverted is-outlined"
                    onClick={() => this.sortContactsByPopularity()}
                  >
                    Sort by popularity
                  </button>
                </p>
              </div>
              <section class="section">
              <div class="columns is-centered">
              <div class="column is-narrow">
                <table class="table has-background-dark m-3 has-text-white">
                  <tr>
                    <th><h4 class="title is-4 is-size-7-mobile has-text-white">Picture</h4></th>
                    <th><h4 class="title is-4 is-size-7-mobile has-text-white">Name</h4></th>
                    <th><h4 class="title is-4 is-size-7-mobile has-text-white">Popularity</h4></th>
                    <th><h4 class="title is-4 is-size-7-mobile has-text-white">Action</h4></th>
                  </tr>
                  {this.state.contactsList.map((contact, index) => {
                    return (
                      <tr key={index}>
                        <td>
                        <figure class="image is-3by4 ">
                          <img
                            class="is-rounded"
                            src={contact.pictureUrl}
                            alt={contact.name}
                          />
                          </figure>
                        </td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity.toFixed(2)}</td>
                        <td>
                          <button
                            class="button is-danger is-outlined is-small"
                            onClick={() => this.deleteContact(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </table>
                </div>
              </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

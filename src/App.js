import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';
// const [contacts, setContacts] = useState(getFirstFive(contacts));

class App extends Component {

  state = {
    contacts: contacts,
    filteredContacts: [...contacts]
  }

  getFirstFive = () => {
    this.setState({filteredContacts: this.state.contacts.slice(0,5)})
  }

  getRandomCelebIndex = () => {
    return Math.floor(Math.random() * this.state.contacts.length);  
  }

  addRandomCeleb = () => {
    let randomIndex = this.getRandomCelebIndex();
    let randomCeleb = this.state.contacts[randomIndex];
    let copyFilteredContacts = [...this.state.filteredContacts];
    if (copyFilteredContacts.indexOf(randomCeleb) !== -1) {
      this.addRandomCeleb();
    } else {
      copyFilteredContacts.push(randomCeleb);
      this.setState({
        filteredContacts: copyFilteredContacts,
      });
    }
  }

  sortByName = () => {
    const copyFilteredContacts = [...this.state.filteredContacts];
    const sortedByNameContacts = copyFilteredContacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      filteredContacts: sortedByNameContacts,
    });
  }

  sortByPopularity = () => {
    const copyFilteredContacts = [...this.state.filteredContacts];
    const sortedByPopularityContacts = copyFilteredContacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      filteredContacts: sortedByPopularityContacts,
    });
  }

  deleteContact = (index) => {
    const copyFilteredContacts = [...this.state.filteredContacts];
    copyFilteredContacts.splice(index, 1);
    this.setState({
      filteredContacts: copyFilteredContacts,
    });
  }
  
  render() {
    return (
      <div>
        <h1>Iron Contacts</h1>
        <button onClick={this.getFirstFive}>Show First Five Contacts</button>
        <button onClick={this.addRandomCeleb}>Add Random Celebrity</button>
        <button onClick={this.sortByName}>Sort Contacts by Name</button>
        <button onClick={this.sortByPopularity}>Sort Contacts by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>
                Picture
              </th>
              <th>
                Name
              </th>
              <th>
                Popularity
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredContacts.map((contact, i) => {
              return(
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt={contact.name} className="actorImage"/>
                  </td>
                  <td>
                    {contact.name}
                  </td>
                  <td>
                    {contact.popularity}
                  </td>
                  <button onClick={() => this.deleteContact(i)}>Delete Contact</button>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import contacts from "./contacts.json";

let fiveContacts = contacts.slice(0, 5);

class App extends React.Component {

  state = {
    ironContacts: fiveContacts,
  }

  randomContact = () => {
    const number = Math.floor(Math.random() * (contacts.length - 1));
    const newRandomContact = contacts[number]
    let addedContacts = this.state.ironContacts.slice();
    addedContacts.push(newRandomContact)
    this.setState({ ironContacts: addedContacts })
  };

  sortName = () => {
    let toSort = [...this.state.ironContacts];
    let sortedContacts = toSort.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState({ ironContacts: sortedContacts });
  };

  sortPopularity = () => {
    let toSort = [...this.state.ironContacts];
    let sortedContacts = toSort.sort((a, b) =>
      a.popularity > b.popularity ? -1 : b.popularity > a.popularity ? 1 : 0
    );
    this.setState({ ironContacts: sortedContacts });
  }

  deleteContact = (id) => {
    let afterDelete = this.state.ironContacts.filter((item) => item.id !== id)
    this.setState({ ironContacts: afterDelete });
  }



  render() {
    return (
      <div className="iron-contacts">
        <h1>IronContacts</h1>
        <button onClick={this.randomContact}>Add Random Character</button>
        
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        
        
        <table className="contacts">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
  
          <tbody>
            {this.state.ironContacts.map((item) => (
              <tr key={item.id}>
                <td><img src={item.pictureUrl} alt='contact' /></td>
                <td>{item.name}</td>
                <td>{item.popularity}</td>
                <td><button onClick={() => {this.deleteContact(item.id)}}>Delete</button></td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </div>
    );

  }

}

export default App;

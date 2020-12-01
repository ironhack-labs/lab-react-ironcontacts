import React from 'react';
// import logo from './logo.svg';
import contacts from './contacts.json';
import './App.css';

class App extends React.Component {
  state = {
      contacts: contacts.slice(0,5)
  }

  addRandomContact = () => {
    const randomContact = contacts[Math.floor(contacts.length * Math.random())];
    this.setState({ contacts: [...this.state.contacts, randomContact] });
  }

  sortByName = () => {
    const sortArrName = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ contacts: sortArrName });
  }

  sortByPopularity = () => {
    const sortArrPopular = this.state.contacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({contacts: sortArrPopular});
  }

  deleteContact = (id) => {
    const filteredContacts = this.state.contacts.filter((contactObj) => {
      if (contactObj.id !== id) { 
        return true;
      } else {  
        return false;
      }
    })
    this.setState({ contacts: filteredContacts });
  }
  
  render(){

    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button 
        className="btn"
        onClick={this.addRandomContact}
      > Add Random Contact </button>
      <button
        className="btn"
        onClick={this.sortByName}
      > Sort by name </button>
      <button
        className="btn"
        onClick={this.sortByPopularity}
      > Sort by Popularity </button>
        <table>
          <thead>
          <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
          </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contactObj) => {
              return (
                <tr key={contactObj.id}>
                  <td>
                    <img 
                      src={contactObj.pictureUrl} 
                      style={{width: "100px"}}
                      alt="" 
                    />
                  </td>
                  <td>{contactObj.name}</td>
                  <td>{contactObj.popularity}</td>
                  <td> 
                    <button 
                      onClick={() => {this.deleteContact(contactObj.id)}} 
                      id={contactObj.id}
                    > Delete </button>
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

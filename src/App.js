import React from 'react';
import contacts from './contacts.json';

import './App.css';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  random = () => {
    const copy = [...this.state.contacts];
   
    copy.push(contacts[Math.floor(Math.random()* contacts.length-1)]);

    this.setState({
      clicked: true,
      contacts : copy,
    })
  }

  sortbyName = () => {
   const sort = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name));
   this.setState({
     contacts : sort,
   })
  }


  sortbyPopularity = () => {
    const sort = this.state.contacts.sort((a, b) => a.popularity - b.popularity);
    this.setState({
      contacts : sort,
    })
  }

  handleRemove = (contact) =>{
    const items = this.state.contacts.filter(item => item.id !== contact.id);
    this.setState({ contacts: items });
  }

  render() {
    return (
      <div className="App">
        <h1>Iron contacts</h1>
        <button onClick={this.random}>Add Random Contact</button>
        <button onClick={this.sortbyName}>Sort by name</button>
        <button onClick={this.sortbyPopularity}>Sort by popularity</button>
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
            {this.state.contacts.map((contact) => (
              <tr>
                <td>
                  <img src={contact.pictureUrl} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td><button onClick={() => this.handleRemove(contact)} key={contacts.id}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

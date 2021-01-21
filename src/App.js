import React from 'react';
import './App.css';
import contacts from './contacts.json';

// const newContacts = contacts.slice(0,5)


class App extends React.Component {

  state = {
    contacts: contacts.slice(0, 5)
  };

  addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    const newContacts = [...this.state.contacts, randomContact];

    this.setState({
      contacts: newContacts
    });
  }
    
  sortByName = () => {
    
  }

  sortByPopularity = () => {

  }

  render() {
    console.log(this.state.contacts)

    return (
      <div className="App" >
      <h1>IronContacts</h1>
      <button onClick={this.addRandomContact}>Add random contact</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <div className="Contacts">
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          
            {this.state.contacts.map(item => {
              return(
                <tr>
                  <td><img key={item.id} src={item.pictureUrl}/></td>
                  <td>{item.name}</td>
                  <td>{item.popularity.toFixed(2)}</td>
                </tr>
                )
            })}
          
          
        </div>
      </div>
    );
  }
}

export default App;


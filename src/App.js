import React from 'react';
import './App.css';
import contacts from './contacts.json';

const firstFive = contacts.slice(0,5)

class App extends React.Component {
  state = {
    contactList: firstFive,
  };

  addRandomContact = () => {
    const newList = this.state.contactList;
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
    if (!newList.includes(randomContact)) {
        newList.push(randomContact)
    }
    this.setState((prevState) => ({
      contactList: newList,
    }));
  };

  sortByName = () => {
    this.setState((prevState) => ({
      contactList: prevState.contactList.sort((a,b) => {
        return a.name > b.name ? -1 : 1;
      })
    }))
  };

  sortByPopularity = () => {
    this.setState((prevState) => ({
      contactList: prevState.contactList.sort((a,b) => {
        return a.popularity > b.popularity ? -1 : 1;
      })
    }))
  };

  removeContact = (index) => {
    const newList = this.state.contactList;
    newList.splice(index, 1);
    this.setState(() => ({
      contactList: newList,
    }));
  }

  render(){
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <div className="head-btns">
        <button onClick={this.addRandomContact} className="top-btns">
          Add Random Contact
        </button>
        <button onClick={this.sortByName} className="top-btns">
          Sort by Name
        </button>
        <button onClick={this.sortByPopularity} className="top-btns">
          Sort by Popularity
        </button>
      </div>
        <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        {this.state.contactList.map((contact, i) => {
          return (
            <tbody key={contact.id}>
              <tr>
                <td>
                  <img className="usr-img" src={contact.pictureUrl} alt="contact-img"/>
                </td>
                <td>
                  {contact.name}
                </td>
                <td>
                  {(contact.popularity.toFixed(2))}
                </td>
                <td>
                  <button onClick={() => this.removeContact(i)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          )
        })}
          
        </table>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import contacts from './contacts';
import './App.css';

class App extends Component {
  state = {
    contacts: contacts.filter((el, index) => index < 5)
  }
  
  addRandomContact() {
    const newContact = contacts[Math.floor(Math.random() * (contacts.length - 5 + 1) + 5)];

    this.setState(prevState => {
      if (!prevState.contacts.includes(newContact)){
        return {
          contacts: prevState.contacts.concat(newContact)
        };
      };
    });
  };

  sortContacts = (event) => {
    const { contacts } = this.state;

    if (event.target.name === 'popularity') {
      const contactsSorted = contacts.sort((a, b) => b.popularity - a.popularity);

      this.setState({
        contacts: contactsSorted
      });
    } else if (event.target.name === 'name') {
      const contactsSorted = contacts.sort((a, b) => a.name.normalize().localeCompare(b.name.normalize()));

      this.setState({
        contacts: contactsSorted
      });
    };
  };

  deleteContacts = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      }
    })
  }

  render(){
    return (
      <div className="App">
        <h2>IronContacts</h2>
        <div className="main-content">
          <div className="buttons-div">
            <button className="add-contact" onClick={() => this.addRandomContact()}>
              Add Random Contact
            </button>
            <button className="sort-popularity" name="popularity" onClick={this.sortContacts}>
              Sort by Popularity
            </button>
            <button className="sort-name" name="name" onClick={this.sortContacts}>
              Sort by Name
            </button>
          </div>
          <div className="actors-table container">
            <table className="table">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th style={{paddingRight: '30px'}}>Popularity</th>
                  <th style={{paddingRight: '30px'}}>Won Oscar</th>
                  <th style={{paddingRight: '30px'}}>Won Emmy</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.contacts.map(contact => {
                    return (
                      <tr key={contact.id}>
                        <th><img src={contact.pictureUrl} alt="" /></th>
                        <th>{contact.name}</th>
                        <th style={{paddingRight: '30px'}}>{contact.popularity.toFixed(2)}</th>
                        <th style={{paddingRight: '30px'}}>{contact.wonOscar && '🏆'}</th>
                        <th style={{paddingRight: '30px'}}>{contact.wonEmmy && '🌟'}</th>
                        <th className="remove-contact-wrapper">
                          <button className="remove-contact" onClick={() => this.deleteContacts(contact.id)}>
                            Delete
                          </button>
                        </th>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

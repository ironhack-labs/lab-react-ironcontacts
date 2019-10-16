import React, { Component } from 'react';
import './App.scss';
import Contact from './components/Contact';

//data
import ContactsList from './contacts.json';

class App extends Component {
  state = {
    contactList: ContactsList,
    contactsShown: ContactsList.slice(0,5)
  }

  searchHandeler = (e) => {
      let searchQuery = e.target.value;

      if(searchQuery === ''){
            let totalList = this.state.contactList
            let oldList = totalList.slice(0,5)
            this.setState({contactsShown: oldList});
      } else {
            let searchResult = this.state.contactList.filter((contact) => 
            contact.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
            );
            this.setState({contactsShown: searchResult});
      }
  }

  addContact = () => {
      let randomIndex = Math.floor(Math.random()*this.state.contactList.length);
      let contact = this.state.contactList[randomIndex];
      let contactsNew = [...this.state.contactsShown];

      contactsNew.push(contact);
      this.setState({contactsShown: contactsNew});
  }

  sortName = () => {
      let contactsNew = [...this.state.contactsShown];
      contactsNew.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 
      this.setState({contactsShown: contactsNew});
  }

  sortPopularity = () => {
      let contactsNew = [...this.state.contactsShown];
      contactsNew.sort((a,b) => (a.popularity > b.popularity) ? 1 : ((b.popularity > a.popularity) ? -1 : 0)); 
      this.setState({contactsShown: contactsNew});
  }


  removeContact = (name) => {
      let contacts = [...this.state.contactsShown];
      let contactsNew = contacts.filter((contact) => {
         return !(contact.name === name)
      });
      this.setState({contactsShown: contactsNew});
  }

  render() {
    return (
              <div className="App">
                  <h1>IronContacts</h1>
                  <input onChange={this.searchHandeler} type="text" placeholder='Search contact...'/>
                  <div className='buttonBox'>
                      <button onClick={this.addContact}>Add Random Contact</button>
                      <button onClick={this.sortName}>Sort by name</button>
                      <button onClick={this.sortPopularity}>Sort by popularity</button>
                  </div>
                  <table className='tableContainer'>
                    <thead>
                        <tr className='columnTitlesBox'>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='contactsContainer'>
                            {this.state.contactsShown.map((contact) => {
                                return (     
                                                <Contact
                                                    pictureUrl={contact.pictureUrl}
                                                    name={contact.name}
                                                    popularity={contact.popularity}
                                                    deleteMe={this.removeContact}
                                                />
                                            
                                    )       
                            })}
                    </tbody> 
                  </table>
              </div>
            );
  }
}

export default App;

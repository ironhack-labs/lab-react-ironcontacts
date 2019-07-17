import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import HomeContacts from './components/HomeContacts'
import { Button } from "antd";

const contactArray = contacts.map((contact, i) => {
  return {...contact, i}
})

class App extends Component {
  state = {
    initialContacts: contactArray.slice(0,5)
  }

  addRandomContact = () => <div className="">Aiuda</div>

	sortByName = () => {
		const contacts = [...this.state.initialContacts];
		this.setState({ initialContacts: contacts.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    }
    )})
  }

	sortByPopularity = () => {
		const contacts = [...this.state.initialContacts];
    this.setState({ initialContacts: contacts.sort((a, b) =>
      { 
      if (a.popularity > b.popularity) return 1
      if (a.popularity < b.popularity) return -1
      return 0
      }
      )})
	}

	removeContact = id => {
		const contacts = [...this.state.initialContacts];
		this.setState({ initialContacts: contacts.filter(c => c.id !== id) });
	};

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <div className="buttons">
          <Button onClick={this.addRandomContact}>
						Add Random Contact
					</Button>
					<Button onClick={this.sortByName}>
						Sort by name
					</Button>
					<Button onClick={this.sortByPopularity}>
						Sort by popularity
					</Button>
        </div>
        <HomeContacts contacts={this.state.initialContacts} removeContact ={this.removeContact}/>
      </div>
    );
  }
}

export default App;

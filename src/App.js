import React from 'react';
import logo from './logo.svg';
import contacts from './contacts.json'
import './App.css';
import Contact from './components/Contacts'
import 'bulma/css/bulma.css'

import _ from 'lodash'

class App extends React.Component {

  state = {
    contacts: contacts
  }

  // Iteration 1 | Display 5 Contacts

  sliceHandler = () => {

    this.setState({
      contacts: this.state.contacts.slice(0, 5)
    })

  }

  // Iteration 2 | Add New Random Contacts 

  addRandomHandler = () => {

    let copyContacts = [...this.state.contacts]

    let randomEl = _.sample(contacts, 1)

    copyContacts.push(randomEl)

    this.setState({
      contacts: copyContacts
    })

  }

  // Iteration 3 | Sort Contacts By Name And Popularity

  sortByNameHandler = () => {

    let copyContacts = [...this.state.contacts]

    let sortedNameList = _.orderBy(copyContacts, [`name`])

    this.setState({
      contacts: sortedNameList
    })
  }

  sortByPopularityHandler = () => {

    let copyContacts = [...this.state.contacts]

    let sortedPopularityList = _.orderBy(copyContacts, [`popularity`], "desc")

    this.setState({
      contacts: sortedPopularityList
    })
  }

  //Iteration 4 | Remove Contacts

  deleteHandler = (id) => {

    this.setState({
      contacts: this.state.contacts.filter((c) => c.id !== id)
    })
  }

  render() {
    let contacts = this.state.contacts

    return (
      <div className="App">
        <div className="buttons has-addons is-centered">
          <ul>
            <button className="button is-white" onClick={this.sliceHandler}>SHOW 5 CONTACTS</button>
          </ul>
          <ul><button className="button is-white" onClick={this.addRandomHandler}>ADD RANDOM CELEBRITY</button>
          </ul>
          <ul><button className="button is-white" onClick={this.sortByNameHandler}>SORT BY NAME</button>
          </ul>
          <ul><button className="button is-white" onClick={this.sortByPopularityHandler}>SORT BY POPULARITY</button>
          </ul>
          <br />
          {contacts.map((c) => <Contact contactId={c.id} name={c.name} pictureUrl={c.pictureUrl} popularity={c.popularity} deleteHandler={this.deleteHandler} />)}
        </div>
      </div>
    )
  }

}

export default App;

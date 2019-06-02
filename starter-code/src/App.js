import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import contacts from './contacts.json'
import ListContacts from './component/ListContacts';
import ButtonActions from './component/ButtonAction';

class App extends React.Component {

  state = {
    choosenContacts : contacts.slice(0, 5),
  }

  addContact = () => {
    let newCon = contacts[(Math.floor(Math.random() * contacts.length))]
    if (this.state.choosenContacts.length !== contacts.length && this.state.choosenContacts.find(e => e.name === newCon.name) === undefined) {
      this.setState({
        choosenContacts: [...this.state.choosenContacts, newCon]
      })
    } else if (this.state.choosenContacts.length ) {
      document.getElementById('addActor').disabled = true;
    } else {
      this.addContact()
    }
  }

  deleteContact = (contact) => {
    this.setState({
      choosenContacts: this.state.choosenContacts.filter(contactToDel => contactToDel.name !== contact.name)
    })
    document.getElementById('addActor').disabled = false;
  }

  sortByName = () => {

    this.setState({
      choosenContacts: this.state.choosenContacts.sort((a, b) => {
        if (a.name < b.name) { return -1 } else if (b.name < a.name) { return 1 }
        return 0
      })
    })
  }

  sortByPopularity = () => {
    this.setState({
      choosenContacts: this.state.choosenContacts.sort((a, b)=>  b.popularity - a.popularity)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">IronContacts</h1>
          </div>
        </div>
        <ButtonActions id="addActor" text="Add Ramdon Actor" action={this.addContact}/>
        <ButtonActions text="Sort by name" action={this.sortByName}/>
        <ButtonActions text="Sort by popularity" action={this.sortByPopularity}/>
        <ListContacts choosenContacts={this.state.choosenContacts} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}

export default App;
 

import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import contacts from './contacts.json'
import ListContacts from './component/ListContacts';
import ButtonActions from './component/ButtonAction';

class App extends React.Component {

  state = {
    choosenContacts : contacts.slice(0, 5),
    estado: false
  }

  addContact = () => {
    const ramdonContact = contacts.slice(this.state.choosenContacts.length, this.state.choosenContacts.length+1)
    this.setState({
      choosenContacts: [...this.state.choosenContacts, ...ramdonContact]
    })
  }

  sortByName = () => {

    this.setState({
      choosenContacts: this.state.choosenContacts.sort((a, b) => {
        if (a.name < b.name) { return -1 }
        if (b.name < a.name) { return 1 }
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
        <ButtonActions text="Add Ramdon Actor" action={this.addContact}/>
        <ButtonActions text="Sort by name" action={this.sortByName}/>
        <ButtonActions text="Sort by popularity" action={this.sortByPopularity}/>

        <ListContacts choosenContacts={this.state.choosenContacts}/>
      </div>
    );
  }
}

export default App;
 

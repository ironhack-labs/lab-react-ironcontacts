import React, { Component, Fragment } from 'react';
import './App.css';
import Table from './modules/Table.js'
import contacts from './contacts.json'
import Header from './modules/Header'
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor(){
    super();
      this.state = {
        contacts: contacts.slice(0, 5)
      }
    }
    addContactsHandler = () =>{
      const contactsCopy = this.state.contacts;
      contactsCopy.push(contacts[contactsCopy.length]);
      this.setState({
        contacts: contactsCopy
      })
    }

    compareName = (a,b) => {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }

    comparePopularity = (a,b) =>{
      if (a.popularity < b.popularity)
        return 1;
      if (a.popularity > b.popularity)
        return -1;
      return 0;
    }

    sortByNameHandler = () => {
      const contactsCopy = this.state.contacts;
      contactsCopy.sort(this.compareName);
      this.setState({
        contacts: contactsCopy
      })
    }

    sortByPopularityHandler = () => {
      const contactsCopy2 = this.state.contacts;
      contactsCopy2.sort(this.comparePopularity);
      console.log(contactsCopy2);
      this.setState({
        contacts: contactsCopy2
      })
    }

    

  render() {
    return (
      <div className="App">
        <Fragment>
          <Header addContact={() => this.addContactsHandler()} sortName={() => this.sortByNameHandler()} sortPopularity={() => this.sortByPopularityHandler()}/>
          <Table contacts={this.state.contacts}/>
        </Fragment>
      </div>
    );
  }
}

export default App;

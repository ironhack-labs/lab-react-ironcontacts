import React, { Component } from 'react';
import './App.css';
// import contacts json
import contacts from './contacts.json'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: contacts.slice(0,5)
    }
  }
      addHandler() {
        let newContacts = [...this.state.contacts];
        let idx = Math.floor(Math.random() * contacts.length);
        //  pushes to array newMovies
        newContacts.push(contacts[idx])
        // changes the state of movies array in state obj
        this.setState({
          contacts: newContacts
        });
      }
    
    sortNameHandler(){
      let sortName = [...this.state.contacts];

      sortName.sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })

      this.setState({
        contacts: sortName
      })
    }

    sortPopularityHandler(){
      let sortPop = [...this.state.contacts];

      sortPop.sort((a, b) => {
        return a.popularity - b.popularity;
      });

      this.setState({
        contacts: sortPop
      })
    }

    deleteHandler(index) {
      let newContacts = [...this.state.contacts];
      newContacts.splice(index, 1);

      this.setState({
        contacts: newContacts
      });
    }
  

  render() {

    return (
      <div className="App">
        <button onClick= {() => this.addHandler()}> Add Random Contacts </button> 
        <button onClick= {() => this.sortNameHandler()}> Sort by name </button> 
        <button onClick= {() => this.sortPopularityHandler()}> Sort by popularity </button> 


        {this.state.contacts.map((contact, index) =>

        <div className="contacts" key={index}>
          <img height="150" width="100" src={contact.pictureUrl}/>
          <h4>{contact.name}</h4>
          <p> {contact.popularity.toFixed(2)} </p>

          <button className="btn-del" onClick={this.deleteHandler.bind(this, index)}> Delete</button>
        </div>
        )
      }
      </div>
    );
  }
}

export default App;

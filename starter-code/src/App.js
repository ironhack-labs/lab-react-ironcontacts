import React, { Component } from "react";
import "./App.css";

import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: []
  };

  pushContacts = num => {
    for (let i = 0; i < num; i++) {
      this.state.contacts.push(contacts[i]);
    }
  };

  addRandomContact = () =>{
    const updatedContacts = [...this.state.contacts];
    updatedContacts.push(contacts[parseInt(Math.random() * contacts.length)])
    this.setState({
      ...this.state, contacts: updatedContacts
    })
  }

  sortByName = () =>{
    const updatedContacts = [...this.state.contacts].sort(( a, b ) => b.name < a.name ? 1 : -1);

    this.setState({
      ...this.state, contacts: updatedContacts
    })
  }

  sortByPopularity = () =>{
    const updatedContacts = [...this.state.contacts].sort(( a, b ) => b.popularity - a.popularity );
    this.setState({
      ...this.state, contacts: updatedContacts
    })
  }

  deleteContact = (e) =>{
    const updatedContacts = [...this.state.contacts]
    updatedContacts.splice( e.target.parentNode.parentNode.id, 1 )
    this.setState({
      ...this.state, contacts: updatedContacts
    })
  }

  componentWillMount() {
    this.pushContacts(5);
  }

  render() {
    return (
      <React.Fragment>
        <h1>IronContacts</h1>
        <div>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>  
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

          <tbody>
            {this.state.contacts.map((elem, i) => (
                <tr key={i} id={i}>
                  <td><img style={{width: 100}} src={elem.pictureUrl} alt={elem.name}/></td>
                  <td>{elem.name}</td>
                  <td>{elem.popularity}</td>
                  <td><button onClick={this.deleteContact} >Delete</button></td>
                </tr>
              ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts,
    };
  }


  addHandler = () => {
    const randomContact = Math.floor(Math.random() * this.state.contacts.length);
    const newContact = this.state.contacts
    newContact.unshift(this.state.contacts[randomContact])
      this.setState({
        contacts: newContact
      })
  }

  sortByNameHandler = () => {
    const sortContact = this.state.contacts.sort((a,b) => (a.name > b.name) ? 1 : -1)
      this.setState({
        contacts: sortContact
      })
  }

  sortByPopularityHandler = () => {
    const sortContact = this.state.contacts.sort((a,b) => (a.popularity < b.popularity) ? 1 : -1)
      this.setState({
        contacts: sortContact
      })
  }

  deleteHandler(idx) {
    const newContact = [...this.state.contacts];
    newContact.splice(idx, 1);
    this.setState({
        contacts: newContact,
    })
  }

  render() {
    console.log(this.state.contacts);
    return (
      <div className="App">
      <div className="div-btn">
      <button className="btn" onClick = {this.addHandler}>Add Randomly</button>
      <button className="btn" onClick = {this.sortByNameHandler}>Sort by Name</button>
      <button className="btn" onClick = {this.sortByPopularityHandler}>Sort by Popularity</button>
      </div>
      

        <table className="table"> 
         <thead>
            <tr>
              <th><h4>Picture</h4></th>
              <th><h4>Name</h4></th>
              <th><h4>Popularity</h4></th>
            </tr>
            </thead>
        {this.state.contacts.slice(0, 6).map((elem, idx) => (
          <tbody>
            <tr key={idx} pictureUrl={elem.pictureUrl} name={elem.name} popularity={elem.popularity} {...elem}>
              <td><img class="img" src={elem.pictureUrl} alt={elem.name}/></td> 
              <td>{elem.name}</td>
              <td>{elem.popularity}</td>
              <td><button onClick = {() => this.deleteHandler(idx)}>Delete</button></td>
            </tr>
          </tbody>
        ))}
        </table>
      </div>

    );
  }
}

export default App;

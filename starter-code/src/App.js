import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contacts/Contact.js";
import contacts from "./contacts.json";
class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.splice(0, 5)
    };
  }
  randomHandler = () => {
    let newContactcontact = contacts[Math.floor(Math.random() * contacts.length) + 1];
    let randomContact = [...this.state.contacts];
    randomContact.push(newContactcontact);
    this.setState({ ...this.state, contacts: randomContact });
  };

  sortNameHandler = () => {
    let sortContact = [...this.state.contacts];
    const compare = (a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    };
    this.setState({ ...this.state, contacts: sortContact.sort(compare) });
  };

  sortPopularityHandler = () => {
    let popuContact = [...this.state.contacts];
    const compare = (a, b) => {
      if (a.popularity > b.popularity) return -1;
      if (a.popularity < b.popularity) return 1;
      return 0;
    };
    this.setState({ ...this.state, contacts: popuContact.sort(compare) });
  };

  deleteContactHandler = (index)=>{
    console.log(index);
    let deleteContact = [...this.state.contacts];
    deleteContact.splice(index,1);
    this.setState({...this.state, contacts:deleteContact});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro saludo">
Yared & David los f***ng jaggermaister
        </p>
        <button className="btnStyle" onClick={this.randomHandler}>Add Random Contact</button>
        <button className="btnStyle" onClick={this.sortNameHandler}>Sort by Name</button>
        <button className="btnStyle" onClick={this.sortPopularityHandler}>Sort by popularity</button>
        <div className="contactCont">
          <table>
            <tbody>
              <tr>
                <th className="tableStyle">Picture</th>
                <th className="tableStyle">Name</th>
                <th className="tableStyle">Popularity</th>
              </tr>
              {this.state.contacts.map((contact, index) => (<Contact key={index} index={index} {...contact}  deleteContactHandler={this.deleteContactHandler}/>))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;

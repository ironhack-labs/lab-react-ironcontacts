import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact.js";
import Button from "./Button";


class App extends Component {
  constructor() {
    super();
    this.state = {
      list: contacts.slice(0, 5)
    };
  }

  addRandom = () => {
    let randomNumber = Math.floor(Math.random() * contacts.length) + 1;
    let newArray = this.state.list;
    newArray.push(contacts.slice(randomNumber, randomNumber + 1)[0]);

    this.setState({
      ...this.state,
      list: newArray
    });
  };
  sortContacts = () => {
    let newArray = this.state.list;

    newArray.sort((a, b) => (a.name > b.name) ? 1 : -1)

      this.setState({
      ...this.state,
      list: newArray
    });
  };
  sortPopupalrity = () => {
    let newArray = this.state.list;
    newArray.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1)

    this.setState({
      ...this.state,
      list: newArray
    });
  };
  deleteContact = (index) => {
    let newArray = this.state.list;
    newArray.splice(index,1)

    this.setState({
      ...this.state,
      list: newArray
    });
  };
  render() {
    return (
      <section className="contactDisplayer">
        <div>
          <Button classMod="" text="Add Random" function={this.addRandom} />
          <Button classMod="" text="Sort name" function={this.sortContacts} />
          <Button classMod="" text="Sort popularity" function={this.sortPopupalrity} />
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
          {this.state.list.map((contact, idx) => (
            <Contact
              name={contact.name}
              imgSrc={contact.pictureUrl}
              imdbRating={contact.popularity}
              key={idx}
              idx={idx}
              func={this.deleteContact}
            />
          ))}
          </tbody>
        </table>
      </section>
    );
  }
}

export default App;

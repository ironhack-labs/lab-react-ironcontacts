import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

let shortContactsList = contacts.splice(0, 5)

// function randomContact() {
//   let randomPeople = contacts[Math.floor(Math.random() * contacts.length)];
//   console.log(randomPeople);
// }

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: shortContactsList
    };
  }

  randomContact = () => {
    let randomPeople = contacts[Math.floor(Math.random() * contacts.length)];
    
    this.setState((prevState, props) => {
      const newArr = prevState.contactsList.push(randomPeople)
      return {contactsList: newArr}
    })
  }

  render(props) {
    return (
      <>
        <button onClick={this.randomContact}>Random contact</button>
        <tr>
          <td>
            <img
              className="thumbnails"
              src={this.props.pictureUrl}
              alt="profil"
            />
          </td>
          <td>{this.props.name}</td>
          <td>{this.props.popularity}</td>
        </tr>
      </>
    );
  }
}




function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="table">
        <thead>
          <tr>
            <th>
              <h2>Picture</h2>
            </th>
            <th>
              <h2>Name</h2>
            </th>
            <th>
              <h2>Popularity</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {shortContactsList.map((contact) => {
            console.log(contact.name);
            return <Table pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}/>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
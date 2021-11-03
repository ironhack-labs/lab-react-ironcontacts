import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

var ShowContact;

let shortContactsList = contacts.splice(0, 5);
console.log(shortContactsList);

function randomContact() {
  let randomPeople = contacts[Math.floor(Math.random() * contacts.length)];
  console.log(randomPeople);
}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: "no", // real app better use boolean
    };
  }

  render(props) {
    return (
      <>
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
      <button onClick={randomContact}>Random contact</button>
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
          return <Table />
          })
        </tbody>
      </table>
    </div>
  );
}

export default App;

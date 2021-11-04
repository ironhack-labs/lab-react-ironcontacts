import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

let shortContactsList = contacts.splice(0, 5)


let Contact = (props) => {

      return (
        <>
          <tr>
            <td>
              <img
                className="thumbnails"
                src={props.pictureUrl}
                alt="profil"
              />
            </td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
          </tr>
        </>
      );
    }




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: shortContactsList
    };
  }

  randomContact = () => {
    const randomPeople = contacts[Math.floor(Math.random() * contacts.length)];

    this.setState((prevState) => {
      const newList = [...prevState.contactsList, randomPeople]
      return { contactsList: newList }
    })
  }

  sortByName = () => {
    this.setState((prevState) => {
      const sortedList = prevState.contactsList.sort( function (a, b)  {
        return a.name.localeCompare(b.name)
      })
      return { contactsList: sortedList}      
    })
  }

render() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="table">
        <button onClick={this.randomContact}>Random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
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
          {this.state.contactsList.map((contact) => {
            return <Contact pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}/>
          })}
        </tbody>
      </table>
    </div>
  );
        }
}

export default App;
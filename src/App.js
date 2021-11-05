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
          <button onClick={props.clickToDelete}>DELETE</button>
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

  sortByRating = () => {
    this.setState((prevState) => {
      const sortedList = prevState.contactsList.sort(function (a, b) {
        return a.popularity - b.popularity
      })
      return { contactsList: sortedList }
    })
  }

  // delete = () => {
  //   console.log(this.state.contactsList[0].id)
  // }
  deleteContactHandler = id => {
    const initialContactsCopy = this.state.contactsList;
    const intitialContactsIndex = initialContactsCopy.findIndex(contact => contact.id === id);
    initialContactsCopy.splice(intitialContactsIndex, 1);
    this.setState({
      initialContacts: initialContactsCopy
    })
  }

render() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table className="table">
        <button onClick={this.randomContact}>Random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByRating}>Sort by rating</button>
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
            return <Contact
            key={contact.id} {...contact} clickToDelete={() => this.deleteContactHandler(contact.id)}
            pictureUrl={contact.pictureUrl}
            name={contact.name}
            popularity={contact.popularity}
            delete={this.delete}/>
          })}
        </tbody>
      </table>
    </div>
  );
        }
}

export default App;
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


class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      popularity: 0
    };
  }

  handleInput = (event) => {
    const propName = event.target.name
    this.setState({ [propName]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const contactInfo = {
      name: this.state.name,
      popularity: this.state.popularity,
    }

    this.props.addContactHandler(contactInfo)

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
        </label>
        <label> Popularity:
          <input
            type="number"
            name="popularity"
            value={this.state.popularity}
            onChange={this.handleInput}
          />
        </label>
        <button>Submit</button>
      </form>
    )
  }
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

  deleteContactHandler = id => {
    const contactsListCopy = this.state.contactsList;
    const contactsListIndex = contactsListCopy.findIndex(contact => contact.id === id);
    contactsListCopy.splice(contactsListIndex, 1);
    this.setState({
      contactsList: contactsListCopy
    })
  }


  createContact = (newContactDetails) => {
    this.setState((prevState) => {
      const newList = [...prevState.contactsList, newContactDetails]
      return { contactsList: newList }
    })
  }


render() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <AddContact addContactHandler={this.createContact}/>
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
import React, {Component} from "react";
import contacts from "./contacts.json";
import "./ContactList.css";

class ContactList extends Component {
  constructor(props) {
    super(props);
    const limit = 5;

    this.state = {
      fiveContacts: contacts.slice(0, limit)
    };
  }

  handleRandomAdd() {
    const contact = this.state.fiveContacts;
    const randomIndex = Math.floor(Math.random() * contacts.length);
    contact.push(contacts[randomIndex]);
    this.setState({fiveContacts: contact});
  }

  handleContactDelete(contactIndex) {
    const contact = this.state.fiveContacts;
    contact.splice(contactIndex, 1);
    this.setState({fiveContacts: contact});
  }

  handleContactSort() {
    const contact = this.state.fiveContacts;
    contact.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({fiveContacts: contact});
  }

  handlePopularitySort() {
    const popularity = this.state.fiveContacts;
    popularity.sort((a, b) => {
      return a.popularity - b.popularity;
    });
    this.setState({fiveContacts: popularity});
  }

  render() {
    const {fiveContacts} = this.state;
    return (
      <div className="ContactList">
        <h1>Iron Contact</h1>
        <button
          onClick={() => {
            this.handleRandomAdd();
          }}>
          Add Random Contact
        </button>
        <button
          onClick={() => {
            this.handleContactSort();
          }}>
          Sort By Name
        </button>
        <button
          onClick={() => {
            this.handlePopularitySort();
          }}>
          Sort By Popularity
        </button>
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
            {fiveContacts.map((oneContact, index) => {
              return (
                <tr key={oneContact.name}>
                  <td>
                    <img src={oneContact.pictureUrl} />{" "}
                  </td>
                  <td> {oneContact.name} </td>
                  <td> {oneContact.popularity}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => {
                        this.handleContactDelete(index);
                      }}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;

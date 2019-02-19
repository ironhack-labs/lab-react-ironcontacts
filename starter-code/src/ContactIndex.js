import React, { Component } from "react";

// load json data and css
import contacts from "./contacts.json";
import "./ContactIndex.css";

// define dedicated class
class ContactIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // assign json data to module state
      contactArray: contacts
    };
  }

  addRandom(minValue) {
    // test drive..
    // let newContact = {
    //   name: "Llama Buscemi",
    //   pictureUrl: "https://dummyimage.com/500x750/eeeeee/f2f2f2",
    //   popularity: 666
    // };

    // get current stored data
    let contacts = this.state.contactArray;

    // random between min value (first 5 here) and total length
    var newContact =
      contacts[Math.floor(Math.random() * contacts.length) + minValue];

    // add it to the top of data
    contacts.unshift(newContact);

    // update state data
    this.setState({ contactArray: contacts });
  }

  // empty state array
  removeAll() {
    let contacts = [];
    this.setState({ contactArray: contacts });
  }

  // detele one from state array
  deleteOne(index) {
    const contacts = this.state.contactArray;

    // remove it and update state
    contacts.splice(index, 1);
    this.setState({ contactArray: contacts });
  }

  // sort by name (REFACTOR alpha and inverse)
  sortByName(object) {
    function compare(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
    // sort it
    object.sort(compare);

    // new state to refresh
    this.setState({ contactArray: object });
  }

  sortByPopularity(object) {
    function compare(a, b) {
      if (a.popularity > b.popularity) return -1;
      if (a.popularity < b.popularity) return 1;
      return 0;
    }

    // sort it
    object.sort(compare);

    // new state to refresh
    this.setState({ contactArray: object });
  }

  render() {
    // debug output current data stored in state
    const { contactArray } = this.state;
    console.log(contactArray);

    return (
      <section>
        <h2>Some Producer Contacts</h2>
        <button onClick={() => this.addRandom(5)}> Add one </button>
        <button onClick={() => this.removeAll()}> Remove all </button>
        <button onClick={() => this.sortByName(contactArray)}>
          Sort by Name
        </button>
        <button onClick={() => this.sortByPopularity(contactArray)}>
          Sort by Popularity
        </button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>

            {/* need to set a key to identify specific element */}
            {contactArray.slice(0, 5).map((oneContact, index) => {
              return (
                <tr key={oneContact.name} className="contact-index">
                  <td>
                    <img
                      src={oneContact.pictureUrl}
                      alt={oneContact.name}
                      className="contact-index-img"
                    />
                  </td>
                  <td>{oneContact.name}</td>
                  <td>
                    {oneContact.popularity}{" "}
                    <button onClick={() => this.deleteOne(index)}>
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

export default ContactIndex;

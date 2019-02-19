import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ButtonGroup } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Image } from "react-bootstrap";

// load json data and css
import contactJsonData from "./contacts.json";
import "./ContactIndex.css";

// define class
class ContactIndex extends Component {
  constructor(props) {
    // enable state
    super(props);
    this.state = {
      // assign json five first elements to state
      contactArray: contactJsonData.slice(0, 5)
    };
  }

  addRandom() {
    // get current stored data
    const contacts = this.state.contactArray;

    // random from contactData
    var newContact =
      contactJsonData[Math.floor(Math.random() * contactJsonData.length)];

    // add it to the top of data
    contacts.unshift(newContact);

    // update state data
    this.setState({ contactArray: contacts });
  }

  // empty state array
  removeAll() {
    const contacts = [];
    this.setState({ contactArray: contacts });
  }

  // detele one from state array
  deleteOne(index) {
    const contacts = this.state.contactArray;

    // remove it and update state
    contacts.splice(index, 1);
    this.setState({ contactArray: contacts });
  }

  // sort by name (REFACTOR a-z / inverse)
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

  // sort by rate (REFACTOR toggle n>0 / inverse)
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
    // output current data stored in state
    const { contactArray } = this.state;

    return (
      <Col xs={12}>
        <Col xs={12} className="m-4">
          <h2>Some Producer Contacts</h2>
          <ButtonGroup aria-label="Sort contacts according to name, popularity, add and remove">
            <Button variant="success" onClick={() => this.addRandom()}>
              Add One
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => this.sortByName(contactArray)}
            >
              ↑ A-Z
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => this.sortByPopularity(contactArray)}
            >
              ↑ by rank
            </Button>
            <Button variant="outline-danger" onClick={() => this.removeAll()}>
              Remove All
            </Button>
          </ButtonGroup>
        </Col>

        <Table hover size="sm">
          <tbody>
            <tr className="bg-light">
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>

            {/* need to set a key to identify specific element */}
            {contactArray.map((oneContact, index) => {
              return (
                <tr key={oneContact.name} className="contact-index">
                  <td>
                    <Image
                      src={oneContact.pictureUrl}
                      alt={oneContact.name}
                      fluid
                      className="contact-index-img"
                    />
                  </td>
                  <td>{oneContact.name}</td>
                  <td>{oneContact.popularity}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => this.deleteOne(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    );
  }
}

export default ContactIndex;

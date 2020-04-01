import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead"
import Paper from "@material-ui/core/Paper";
import contacts from "./contacts.json";
import Contacts from "./Contacts";

class ContactsList extends Component {
  constructor() {
    super();
    this.deleteContact = this.deleteContact.bind(this);
  }
  state = {
    contacts: contacts.slice(0, 5),
    random: contacts[Math.ceil(Math.random() * contacts.length)]
  };

  randomizeCelebrity = () => {
    //adds a random clbr to the table
    let newContactsArray = this.state.contacts.filter(
      contact => contact.id === this.state.random.id
    );
    if (newContactsArray.length === 0) {
      let newArray = this.state.contacts;
      newArray.push(this.state.random);
      this.setState({
        contacts: newArray,
        random: contacts[Math.ceil(Math.random() * contacts.length)]
      });
    } else {
      this.randomizeCelebrity(); //returns to the function to add a clbr
    }
  };

  sortByName = () => {
    let sortedNameArray = this.state.contacts.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts: sortedNameArray,
      random: contacts[Math.ceil(Math.random() * contacts.length)]
    });
  };

  sortByPopularity = () => {
    let sortedPopArray = this.state.contacts.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({
      contacts: sortedPopArray,
      random: contacts[Math.ceil(Math.random() * contacts.length)]
    });
  };

  deleteContact(indexContact) {
    let newContactsArray = [...this.state.contacts];
    newContactsArray.splice(indexContact, 1);
    console.log(
      "ContactsList -> deleteContact -> newContactsArray",
      newContactsArray
    );
    this.setState({
      contacts: newContactsArray,
      random: contacts[Math.ceil(Math.random() * contacts.length)]
    });
  }

  render() {
    return (
      <div>
        <Button variant="contained" onClick={this.randomizeCelebrity}>
          Add Random Celebrity
        </Button>
        <Button variant="contained" onClick={this.sortByName}>
          Sort alphabetically
        </Button>
        <Button variant="contained" onClick={this.sortByPopularity}>
          Sort by popularity
        </Button>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Picture</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Popularity</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.contacts.map((contact, index) => (
                <Contacts
                  key={contact.id}
                  index={index}
                  name={contact.name}
                  pictureUrl={contact.pictureUrl}
                  popularity={contact.popularity}
                  removeContact={this.deleteContact}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default ContactsList;

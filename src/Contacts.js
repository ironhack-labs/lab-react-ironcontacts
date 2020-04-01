import React, { Component } from "react";
import contacts from "./contacts.json";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./Contacts.css";

class Contacts extends Component {
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
    let sortedPopArray = this.state.contacts.sort(function (a, b) {
      return b.popularity - a.popularity;
    })
    this.setState({
      contacts: sortedPopArray,
      random: contacts[Math.ceil(Math.random() * contacts.length)]
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.randomizeCelebrity}>Add Random Celebrity</button>
        <button onClick={this.sortByName}>
          Sort alphabetically
        </button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell align="center">Picture</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Popularity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.contacts.map(contact => (
                <TableRow key={contact.id}>
                  <TableCell align="center">
                    <img className="image" src={contact.pictureUrl} alt="" />
                  </TableCell>
                  <TableCell align="center">{contact.name}</TableCell>
                  <TableCell align="center">{contact.popularity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default Contacts;

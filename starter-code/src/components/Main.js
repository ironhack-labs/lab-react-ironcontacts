import React, { Component } from "react";
import ContactTable from "./ContactTable";
import ButtonList from "./ButtonList";
import Data from "../contacts.json";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts
    };
  }

  addContact() {
   
    const random = Math.floor(Math.random()*Data.length)
   
    this.setState({
      contacts: [
        ...this.state.contacts,
        Data[random]
      ]
    })
  }

  sortContacts(){
      this.setState({
          contacts: this.state.contacts.sort((a,b)=> {
              return a.name > b.name ? 1 : -1
          })
      })
  }

  sortPopularity(){
      this.setState({
          contacts: this.state.contacts.sort((a,b) => {
              return b.popularity - a.popularity
          })
      })
  }

  render() {
    return (
      <div className="container">
        <ButtonList addContact={() => this.addContact()}
         sortContacts={() => this.sortContacts()}
         sortPopularity={() => this.sortPopularity()}/>
        <ContactTable contacts={this.state.contacts} />
      </div>
    );
  }
}

export default Main;

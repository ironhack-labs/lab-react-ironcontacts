import React, { Component } from "react";
import ContactCard from "./ContactCard";
import contacts from "./contacts.json";
import { Button } from "react-bootstrap";

// stateful component!
// because I see in tasks : button = interaction
// as soon as intercation => stateful = class
class ContactList extends Component {
  //   firstFive = contacts.slice(0, 5);
  state = {
    contacts: contacts.slice(0, 5)
    // this.state.contacts = array of 5 contacts
  };
  clickHandler = () => {
    // "this" is correctly bound but only in this method (class property > should be in the class not in the render)
    //  _.sample package lodash.com to avoid the following:
    const randomNumber = Math.floor(Math.random() * (contacts.length - 1));
    const randomOne = contacts[randomNumber];
    // copy the old array
    const copyOldContacts = [...this.state.contacts];
    copyOldContacts.push(randomOne);
    this.setState({
      // here we create a totally new array: should be old array + new one
      contacts: copyOldContacts
      //   or: this.state.contacts.concat([randomOne])
      //   if you put randomOne first , celeb will be added in the beginning
      //   or: [...this.state.contacts, randomeOne]
    });
  };
  deleteHandler = index => {
    this.setState({
      // we want all the elements
      contacts: this.state.contacts.filter(e, i => i !== index)
    });
  };
  render() {
    return (
      <div>
        <h1> List of Celebrities</h1>
        <Button variant="secondary" onClick={this.clickHandler}>
          Add random{" "}
        </Button>
        <ul>
          {/* map function: second argument is always the index, first the element */}
          {this.state.contacts.map((contact, index) => {
            return (
              <ContactCard
                key={index}
                {...contact}
                // popularity={contact.popularity}
                // name={contact.name}
                // pictureUrl={contact.pictureUrl}
                // avoid redundancy => spread operator ...contact instead of pop,name,pic
                oneDelete={() => {
                  this.deleteHandler(index);
                }}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ContactList;

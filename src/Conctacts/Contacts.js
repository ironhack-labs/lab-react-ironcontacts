import React from "react";
import "./Contacts.css";
import arraycontacts from "../contacts.json";

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: arraycontacts,
      fiveContacts: arraycontacts.slice(0, 5),
    };
  }

  filterFunction = (filterArray, copyArray) => {
    filterArray = filterArray.filter((contact) => {
      console.log(copyArray.indexOf(contact));
      return copyArray.indexOf(contact) === -1 ? true : false;
    });
    return filterArray;
  };

  updateCopyArray = (copyArray) => {
    let random = Math.floor(0 + Math.random() * (this.state.contacts.length + 1 - 0));
    this.state.contacts[random] && copyArray.push(this.state.contacts[random]);
    return copyArray;
  };

  newContact = () => {
    let copyArray = [...this.state.fiveContacts];
    let filterArray = [...this.state.contacts];
    filterArray = this.filterFunction(filterArray, copyArray);
    copyArray = this.updateCopyArray(copyArray);
    filterArray = this.filterFunction(filterArray, copyArray);
    this.setState({
      contacts: filterArray,
      fiveContacts: copyArray,
    });
  };

  shortContactName = () => {
    let copyArray = [...this.state.fiveContacts];

    copyArray.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      fiveContacts: copyArray,
    });
  };

  shortContactPopularity = () => {
    let copyArray = [...this.state.fiveContacts];

    copyArray.sort((n1, n2) => n2.popularity - n1.popularity);
    this.setState({
      fiveContacts: copyArray,
    });
  };

  deleteContact = (name) => {
    let copyArray = [...this.state.fiveContacts];
    console.log(name);
    copyArray = copyArray.filter((contact) => {
      return contact.name !== name ? true : false;
    });

    this.setState({
      fiveContacts: copyArray,
    });
  };

  roundDecimals = (num) => Math.round(num * 100) / 100;

  render() {
    return (
      <>
        <div className="buttons">
          <button onClick={this.newContact}>New Contact</button>
          <button onClick={this.shortContactName}>Short Contact By Name</button>
          <button onClick={this.shortContactPopularity}>Short Contact By Popularity</button>
        </div>
        <div className="allContacts">
          {this.state.fiveContacts.map(({id, pictureUrl, name, popularity}) => {
            return (
              <div key={id} className="contacLine">
                <img src={pictureUrl} alt="" />
                <p>{name}</p>
                <p>{this.roundDecimals(popularity)}</p>
                <button onClick={() => this.deleteContact(name)}>Delete</button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

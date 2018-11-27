import React, { Component } from "react";
import contacts from "../contacts.json";
import "./ContatcList.css";

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactArray: contacts.slice(0, 5)
    };
  }
  addContact() {
    const { contactArray } = this.state;
    const randomNumber = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts.splice(randomNumber, 1);
    contactArray.push(randomContact[0]);
    this.setState({ contactArray });
  }
  sortName(){
    const { contactArray } = this.state;
    contactArray.sort((a, b)=>{
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA > nameB){
            return 1;
        }if (nameA < nameB){
            return -1;
        }if(nameA === nameB){
            return 0;
        }
    })
    this.setState({contactArray});
  }
  sortPopularity(){
    const { contactArray } = this.state;
    contactArray.sort((a,b)=>{
        const popA = a.popularity;
        const popB = b.popularity;

        if (popA > popB){
            return -1;
        }if (popA < popB){
            return 1
        }if (popA === popB){
            return 0;
        }
    })
    this.setState({contactArray});
  }
  deleteContact(contactIndex){
    const { contactArray } = this.state;
    contactArray.splice(contactIndex,1)
    this.setState({contactArray})
  }

  render() {
    const { contactArray } = this.state;
    const contactTable = contactArray.map((oneContact, index) => {
      return (
        <tr key={index}>
          <td>
            <img src={oneContact.pictureUrl} alt="picture" />
          </td>
          <td>{oneContact.name}</td>
          <td>{oneContact.popularity}</td>
          <td><button onClick={() => this.deleteContact(index)}>Delete</button></td>
        </tr>
      );
    });
    return (
      <div className="table-contacts">
        <div>
          <button onClick={() => this.addContact()}>Add Random Contact</button>
          <button onClick={() => this.sortName()}>Sort By Name</button>
          <button onClick={() => this.sortPopularity()}>Sort By Popularity</button>
        </div>
        <div>
          <table className="contact-list">
            <tbody>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
              {contactTable}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ContactList;

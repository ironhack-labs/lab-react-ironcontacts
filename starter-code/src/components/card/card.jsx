import React, { Component } from "react";
import contacts from "../../contacts.json";
import "./card.css";

const arr = contacts.splice(0,5);

class Card extends Component {
  constructor() {
    super();
    this.state = { contacts: arr};
  }

  addRandomCard = ()=>{
    arr.push(contacts.splice(Math.floor(contacts.length * Math.random()),1)[0]);
    console.log(arr)
      this.setState({...this.state, contacts: arr})
    console.log()
  }

  render() {
    const tableFields = this.state.contacts.map((contact, index) => (
        <tbody>
        <th key={index}><img src={contact.pictureUrl}></img></th>
        <th key={index}><h1>{contact.name}</h1></th>
        <th key={index}><h1>{contact.popularity}</h1></th>
        </tbody>
    ));
    
    return (
      <div>
      <div className="card">
        <table>
          {tableFields}
        </table>
      </div>
      <button onClick={this.addRandomCard}>Add random Contact</button>
      </div>
    );
  }
}
export default Card;

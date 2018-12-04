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
  sortByName = ()=>{
    let contacts = this.state.contacts
    this.setState({...this.state, contacts:  contacts.sort((a,b)=> {
      if (a.name > b.name){
        return 1
      }
      if (a.name <b.name){
        return -1
      }
      return 0
    })})
  }
  sortByPopularity = ()=>{
    let contacts = this.state.contacts
    this.setState({...this.state, contacts:  contacts.sort((a,b)=> {
      if (a.popularity > b.popularity){
        return 1
      }
      if (a.popularity <b.popularity){
        return -1
      }
      return 0
    })})
  }

  deleteContact = (index)=>{
    let contacts = this.state.contacts;
    this.setState({...this.state, contacts: contacts.slice(index)})
  }

  render() {
    const tableFields = this.state.contacts.map((contact, index) => (
        <tbody>
        <th key={index}><img src={contact.pictureUrl}></img></th>
        <th key={index}><h1>{contact.name}</h1></th>
        <th key={index}><h1>{contact.popularity}</h1></th>
        <th><button onclick={this.deleteContact(index)}>Delete</button></th>
        </tbody>
    ));
    
    return (
      <div>
      <div className="card">
      <button onClick={this.addRandomCard}>Add random Contact</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          {tableFields}
        </table>
      </div>
      </div>
    );
  }
}
export default Card;

import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import contactsJSON from "./contacts.json";


class Contacts extends Component{

  state = {
    contacts: contactsJSON.splice(0,5),
  };

randomContact(){

    let hasard = Math.floor(Math.random()*contactsJSON.length);
    return (contactsJSON.splice(hasard, 1)[0])
  };

sortAlph(a,b){

      if(a.name<b.name){
        return -1
      } else if(b.name<a.name){
        return 1
      }
      return 0

};

sortNum(a,b){
  if(a.popularity<b.popularity){
    return -1
  } else if(b.name<a.name){
    return 1
  }
  return 0
}

handleAddContact = () => {
    let randomP = this.randomContact();
    console.log(randomP);

    this.setState({contacts : [randomP, ...this.state.contacts]})
  };

  handleSortByName = () => {
    let sortedList = this.state.contacts.sort(this.sortAlph)
    console.log(sortedList)
    
    this.setState({contacts : sortedList })

  };

  handleSortByPop = () => {
    let sortedList = this.state.contacts.sort(this.sortNum)
    console.log(sortedList)
    
    this.setState({contacts : sortedList })
  };

  handleDeleteContact (contactToDeleteIndex) {

const copyContact = [...this.state.contacts];
copyContact.splice(contactToDeleteIndex, 1);

this.setState({contacts: copyContact});

  }

  render() {
    return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={this.handleAddContact}>Add new contact</button>
      <button onClick={this.handleSortByName}>Sort by name</button>
      <button onClick={this.handleSortByPop}>Sort by popularity</button>

      <table className="contacts-container">
         <thead>
         <tr>
             <th>Picture
             
             </th>
              <th>Name
              
              </th>
              <th>Popularity
              
              </th>
          </tr>
          </thead>
          
        <tbody>
           {this.state.contacts.map((contact, index) => (
            <tr key={index} className="contact-card">
              <td>
                <img 
                src={contact.pictureUrl} 
                alt="picture"
                width="100"/>
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <button onClick={() => this.handleDeleteContact(index)}>
                  Delete
                </button>
            </tr>
           ))}
         </tbody>
       </table>

    </div>
  );

};

};

export default Contacts;

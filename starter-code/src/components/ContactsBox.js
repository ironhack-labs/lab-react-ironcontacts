import React, { Component } from "react";
import Contacts from "./Contacts";
import contactList from "../contacts.json";
import Buttons from "./Buttons";

class ContactsBox extends Component {
  state = {
    humans: contactList.slice(0, 5)
  };

  handleRandom = () => {
    const { humans } = this.state;
    const randomNumber = Math.floor(Math.random()*contactList.length);
    humans.push(contactList[randomNumber]);
    this.setState ({
      humans,
    })
  }

  // usrObject es el objeto del usuario que contiene toda su información y lo ordenamos por nombre ya que en el componente Button se lo especificamos
  handleSortName = (usrObject) => {
    const { humans } = this.state;
    humans.sort((a, b) => {
      if (a[usrObject] < b[usrObject]) {
        return -1;
      }
      if (a[usrObject] > b[usrObject]) {
        return 1;
      }
      return 0;
    })


    this.setState ({
      humans,
    })
  }

  handlePopularity = (usrObject) => {
    const { humans } = this.state;
    humans.sort((a,b) => {
      if (a[usrObject] < b[usrObject]) {
        return 1;
      }
      if (a[usrObject] > b[usrObject]) {
        return -1;
      }
      return 0;
    })
    
    this.setState({
      humans,
    })
  }

  handleDeleteUsr = (id) => {
    const { humans } = this.state;
    humans.splice(id, 1);
    this.setState({
      humans,
    })
  }
  
  render() {
    return (
      <div>
        <Buttons 
          newCard={this.handleRandom}
          sortName={this.handleSortName}
          sortPopularity={this.handlePopularity}
        />
        {this.state.humans.map((item, index) => {
          return (
            <Contacts
              key={index}
              id={index}
              pictureUrl={item.pictureUrl}
              name={item.name}
              popularity={item.popularity}
              deleteUsr={this.handleDeleteUsr}
            />
          );
        })}
      </div>
    );
  }
}

export default ContactsBox;

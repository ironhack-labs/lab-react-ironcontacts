import React, { Component } from 'react'
import contacts from "./contacts.json"

class Main extends Component {
  state = {
    contactList: contacts.splice(0,5),
    contacts: [...contacts]
  }

  topFive = () => {
    for(let i = 0; i < 5; i++) {
      this.state.contacts.splice(i , 1);
    }
  }
  randomContact = () => {
    let randomIndex = Math.floor(Math.random() * this.state.contacts.length)
    let tempContacts = [...this.state.contacts]
    let tempContact = tempContacts.splice(randomIndex, 1);
    let tempContactList = [...this.state.contactList];
    tempContactList.push(tempContact[0]);
    this.setState({
      contacts: tempContacts,
      contactList: tempContactList
    })
  }

  sortName = () => {
    let tempContactList = [...this.state.contactList]
    tempContactList.sort((x, y) => {
      if(x.name > y.name){
        return 1

      }else if(x.name < y.name){
        return -1
      }else return 0;
    })
    this.setState({
      contactList: tempContactList
    })
  }

  sortPopularity = () => {
    let tempContactList = [...this.state.contactList]
    tempContactList.sort((x, y) => {
      if(x.popularity > y.popularity){
        return 1

      }else if(x.popularity < y.popularity){
        return -1
      }else return 0;
    })
    this.setState({
      contactList: tempContactList
    })
  }

  delete = (index) => {
    let tempContactList = [...this.state.contactList]
    tempContactList.splice(index, 1)
    this.setState({
      contactList: tempContactList
    })
  }

  render() {
    const listItems = this.state.contactList.map((contact, index)=>{
      return(
        <tr key={index}>
        <td><img src={contact.pictureUrl}/></td><td>{contact.name}</td><td>{contact.popularity}</td><td><button onClick={()=>this.delete(index)}>Delete</button></td>
        </tr>
      )
    })
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort By Name</button>
        <button onClick={this.sortPopularity}>Sort By Popularity</button>
        <table>
          <tbody>
            <tr><th>Picture</th><th>Name</th><th>Popularity</th><th>Action</th></tr>
            {listItems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
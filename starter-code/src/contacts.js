import React, { Component } from "react";
import contacts from "./contacts.json";

export class Contact extends Component {
  constructor(props) {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }
  addContact(contacts){
    let randNum = Math.floor(Math.random()* contacts.length);
    this.state.contacts.push(contacts[randNum])
    this.setState({contacts:this.state.contacts})
  }

  sortContact(type){
    this.state.contacts.sort((a,b) =>{
      return type=="name" ? a.name.localeCompare(b.name) : b.popularity<a.popularity;
    })
    this.setState({contacts:this.state.contacts})
  }

  deleteContact(ele){
    this.state.contacts.splice(ele,1);
    this.setState({contacts:this.state.contacts})
  }

  render() {
    
    let myContacts = this.state.contacts.map(ele => {
      let popularity = ele.popularity.toFixed(2)
      return (
        <tr key={ele.name}>
          <td>
            <img width={100} src={ele.pictureUrl} />
          </td>
          <td>{ele.name}</td>
          <td>{popularity}</td>
        <button onClick={()=>this.deleteContact(ele)}>Delete</button>
        </tr>
      );
    });
    
   
    return (
      <div>
        <div class="btns">
      <button onClick={()=> this.addContact(contacts)}>Add Random Contact</button>
      <button onClick={()=> this.sortContact("name")}>Sort By Name</button>
      <button onClick={()=> this.sortContact("popularity")}>Sort By Popularity</button>
      </div>
        <table className="table">
          <thead className="head">
            <tr>
              <th>Picture</th>
              <th>name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {myContacts}
          </tbody>
        </table>
        </div>
    )
  }
}


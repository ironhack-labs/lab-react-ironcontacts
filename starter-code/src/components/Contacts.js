import React, { Component } from 'react';
import contacts from "../contacts.json";

class Contacts extends Component {
    constructor(){
        super();
        this.state = {
          contacts: contacts.slice(0,5),
          sort: false,
        }
    }

addRandom = () => {
  const min = Math.ceil(5);
  const max = contacts.length;
  const randomIndex = Math.floor(Math.random() * (max - min)) + min;
  const newContact = contacts[randomIndex];
  const copy = [...this.state.contacts];
  copy.push(newContact);
  this.setState({contacts: copy})
  // this.state.contacts.push(newContact);
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
  
  this.setState({
        contacts: [...this.state.contacts, randomContact]
    })
};

handleSortByPopularity = (event) => {
  const copy = [...this.state.contacts];
  copy.sort((a, b) => {
    return b.popularity - a.popularity;
  });
  this.setState({ contacts: copy})
};

handleSortByName = (event) => {
  const copy = [...this.state.contacts];
  copy.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  this.setState({ contacts: copy});
}

handleDelete = (index) => {
  const copy = [...this.state.contacts];
  copy.splice(index, 1);
  this.setState({ contacts: copy})
}

render() {
        return(
            <div className="iron-contacts-div">
             <h1>IronContacts</h1>
  <div className="header-buttons">


 <button onClick={this.addRandom}>Add Random Contact</button>
 <button onClick={this.handleSortByName}>Sort by name</button>
 <button onClick={this.handleSortByPopularity}>Sort by popularity</button>
</div>
<table>
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>

  {this.state.contacts.map((oneContact, index) => (
  <tr key={index}>

      <td><img src={oneContact.pictureUrl} alt="img"/></td>
      <td>  {oneContact.name}</td>
      <td>  {oneContact.popularity.toFixed(2)}</td>
    <td><button onClick={this.handleDelete}>Delete</button></td>

    </tr>
    ))}
  </tbody>
</table>



 {/* {this.state.contacts.map(oneContact => 
 <div key={oneContact.id}>  

 {this.sortByName().map((contact, index) => (
     <p key={index}>
     <img src={contact.pictureUrl} alt="img"/>
 {contact.name}
 {contact.popularity}
     </p>
 ))}

 </div>)} */}
</div>

        ) 
}
}
export default Contacts;
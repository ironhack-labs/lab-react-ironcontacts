import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';


const contactsData = contacts.splice(0, 5);

class App extends Component {

state ={
  contact: contactsData
}

randomCont= () =>{
  const newContact =contacts[Math.floor(Math.random() * contacts.length)];
  const randomCopy = this.state.contact.slice();
  randomCopy.push(newContact);
this.setState ({
  contact: this.state.contact.concat(newContact)
})
  }

sortName = () => {
const sortedCopy = contactsData.sort((a, b) => a.name.localeCompare(b.name))

this.setState({
  contact: sortedCopy
})

}

sortByPop = () => {
  const contactsCopy = this.state.contact.slice();
  contactsCopy.sort((a, b) => b.popularity - a.popularity)
  this.setState({
    contact: contactsCopy
  })
}



delete = (i) =>{
  const contactsCopy = this.state.contact.slice();
  contactsCopy.splice(i,1)
  this.setState({
    contact: contactsCopy
  })
}






  render() {
    
      const contactList =this.state.contact.map((contact)=>{
         return (
             <tr key={contact.id}>
                 <td>
                 <img className="img" src={contact.pictureUrl} alt="" /></td>
                 <td>{contact.name}</td>
                 <td>{contact.popularity}</td>
                 <td><button onClick = {this.delete}>Delete</button></td>
             </tr>
             )
             
 })

    return (
      <div className="App">
     <h1>IronContacts</h1>
     <button onClick={this.randomCont}>Add Random Contact</button>
     <button onClick = {this.sortName}>Sort by Name </button>
     <button onClick = {this.sortByPop}>Sort By Popularity</button>
     <table >
     <thead>
             <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
             </tr>
             </thead>
             <tbody>{contactList}</tbody> 
         </table>
      </div>
    );
  }

}
export default App;

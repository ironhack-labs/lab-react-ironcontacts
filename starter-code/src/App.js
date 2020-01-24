import React, { Component } from 'react';
import contacts from './contacts.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {contacts: contacts.slice(0 , 5)}
  }
  render() {
    console.log(this.state.contacts)

    const contactList = this.state.contacts.map((contact)=>{
     return (
     <tr key={contact.id}>
     <td ><img src= {contact.pictureUrl} alt="Bescheuertes Bild" className='img'/></td>
     <td>{contact.name}</td>
     <td>{contact.popularity}</td>
     </tr>
     )
    })
      


    console.log(contactList);
    return (
        <div>
         <h1>IronContacts</h1>
         <table>
           <thead>
             <tr>
               <th>Picture</th>
               <th>Name</th>
               <th>Popularity</th>
             </tr>
           </thead>
           <tbody>
           {contactList}
           </tbody>
         </table>
         
         
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import contacts from './contacts';

class App extends Component {

  initContacts = [];
  initContacts = contacts.filter((contact, idx) => idx < 5);

  state = {
    contacts: this.initContacts
  }

  addRandomContact = () =>{
    const rndContact = contacts[Math.floor(Math.random()*contacts.length)]
    const newContacts = [...this.state.contacts, rndContact]
    this.setState({contacts: newContacts})
  }



  // displayedContacts = 

  render(){

    return (
      <div className="App">
       <header className="App-header">
       <h1>IronContacts</h1>
       <button onClick={()=>this.addRandomContact()}>Add Random Contact</button>
       <table>
         <tr>
           <th>Picture</th>
           <th>Name</th>
           <th>Popularity</th>
         </tr>
         {this.state.contacts.map(contact => 
           <tr>
             <td><img src={contact.pictureUrl} alt={contact.name} width={'55px'} height={'85px'}/></td>
             <td><p>{contact.name}</p></td>
             <td><p>{contact.popularity}</p></td>
           </tr>
           )} 
        </table> 
       </header>
     </div>
   );

  }

}

export default App;

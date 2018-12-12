import React, { Component } from 'react';
import './App.css';
import contacts from '../src/contacts.json'
import Contacts from './components/contacts/Contacts'


class App extends Component {
  
  state = { }
  
componentWillMount(){
let list = [];
for (var i = 0; i < 5; i++) {
  list.push(contacts[i])
}
this.setState({contacts: list})
}


  render() {
    console.table(this.state.contacts)
    return (
      <div className="App">
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
   {this.state.contacts.map((celebrity, contador) => {
             return (
               <Contacts key={contador} {...celebrity} />
             )
           })}
          </tbody>
         </table>
      </div>
    );
  }
}



export default App;

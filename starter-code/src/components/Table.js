import React, { Component } from 'react';

import contacts from '../contacts.json'

class Table extends Component {
  constructor(){
    super();
    this.state = {
      myContacts : contacts.slice(0, 5)
    }
}


addRandomContact = () => {
const index = Math.floor(Math.random()*contacts.length);

let myContactsCopy = [...this.state.myContacts];

myContactsCopy.push(contacts[index]);

this.setState({
  myContacts : myContactsCopy
})
}


    render() {
      console.log(this.state.myContacts);
      return (
        <div>
        <button onClick={()=>{this.addRandomContact()}} >Add Random Contact</button>
        <table>
         <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          {
            this.state.myContacts.map((celeb) => {
             return (
            <tr key={celeb.name}>
              <td><img src={celeb.pictureUrl} width="50px" /></td>
              <td>{celeb.name}</td>
              <td>{celeb.popularity}</td>
            </tr>
                  )
                }
      )
    }
    </table>
    </div>
      )
  }
};
  
  export default Table;
  
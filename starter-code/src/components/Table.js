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

sortByName = () =>{
  let myContactsCopy = [...this.state.myContacts];

  myContactsCopy.sort(function (a, b) {
    return  a.name - b.name;
  });

  this.setState({
    myContacts : myContactsCopy
  })
} 

sortByPopularity = () =>{
  let myContactsCopy = [...this.state.myContacts];

  myContactsCopy.sort(function (a, b) {
    return - a.popularity + b.popularity;
  });

  this.setState({
    myContacts : myContactsCopy
  })
} 

removeContact= (nameToRemove) => {
  let myContactsCopy = [...this.state.myContacts];
  myContactsCopy.filter(celeb => !(celeb.name = nameToRemove));

  this.setState({
    myContacts : myContactsCopy
  })

};

    render() {
      console.log(this.state.myContacts);
      return (
        <div>
        <button onClick={()=>{this.addRandomContact()}} >Add Random Contact</button>
        <button onClick={()=>{this.sortByName()}} >Sort By Name</button>
        <button onClick={()=>{this.sortByPopularity()}} >Sort By Popularity</button>
        <table>
         <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          {
            this.state.myContacts.map((celeb) => {
             return (
            <tr key={celeb.name}>
              <td><img src={celeb.pictureUrl} width="50px" /></td>
              <td>{celeb.name}</td>
              <td>{celeb.popularity}</td>
              <td><button onClick={()=>{this.removeContact(celeb.name)}}>Delete</button></td>
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
  
import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts';
import contactsData from "./contacts.json"




class App extends Component {
constructor(props){
  super(props)
  this.state = {
    myContacts: contactsData.slice(0,5)
  }
}
addRandomContact(){
  let newContacts = [...this.state.myContacts];
  newContacts.push(contactsData[Math.floor(Math.random()*contactsData.length)]);
  console.log(newContacts)
  this.setState({
    ...this.state,
    myContacts: newContacts
  })
}

// dynamicSort(property) {
//   var sortOrder = 1;
//   if(property[0] === "-") {
//       sortOrder = -1;
//       property = property.substr(1);
//   }
//   return (a,b) => {
//       var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
//       return result * sortOrder;
//   }
// }




render() {
  return (
    <React.Fragment>
          <p className="titulo">Ironhack Contacts</p>
                <button className="btn" onClick={()=>this.addRandomContact()}>Add Random Contact</button>
                {/* <button className="btn" onClick={()=>this.dynamicSort()}>Sort by name</button> */}
      < Contacts contacts ={this.state.myContacts}/>
      </React.Fragment>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './index.css';
import contacts from './contacts.json';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        ironContact: contacts.slice(0,5), 
        otherContacts: contacts.slice(192) 
    }
}

showContact = () =>{
  return this.state.ironContact.map((eachContact,i)=>{
      return(<table key={i}>
             <tr> 
             <td><img src={eachContact.pictureUrl} style={{width: '50px'}}/></td>
             <td>{eachContact.name}</td>
              <td>{eachContact.popularity}</td>
              <td><button onClick = {()=>{this.deleteContact(i)}}>Delete</button></td>
             </tr>
             </table>
        )
  })
}

addRandom = () =>{
  let othersClone = [...this.state.otherContacts];

  let rand = othersClone.splice(Math.floor(Math.random()* othersClone.length), 1)[0]
  
  console.log(rand)

  let clone = [...this.state.ironContact];

  if(rand)
  clone.unshift(rand);
  this.setState({ironContact: clone, otherContacts: othersClone})
}



sortByName = () =>{
let clone = [...this.state.ironContact];
clone.sort((a, b) => {
  return a.name.localeCompare(b.name)})
this.setState({ironContact: clone})
}



sortByPopularity = () =>{
  let clone = [...this.state.ironContact];
  clone.sort((a, b) => {
  return a.popularity > b.popularity ? -1 : b.popularity > a.popularity ? 1 : 0;})
  this.setState({ironContact: clone})
}

deleteContact = (theIndex) =>{
  let clone = [...this.state.ironContact];
  clone.splice(theIndex, 1);
  this.setState({ironContact: clone})
}

  render() {
    return (
      
      <div className="App">
      <h1>IronContacts</h1>
      <section className="buttons-section" >
      <button onClick = {this.addRandom}>Add Random Contact</button>
      <button onClick = {this.sortByName}>Sort by Name</button>
      <button onClick = {this.sortByPopularity}>Sort by Popularity</button>
      </section>
    
     <div className="contactTitle"> 
      <table className="table-container">
      <tr>
             <th>Picture</th>
             <th>Name</th>
             <th>Popularity</th>
             <th>Action</th>
             </tr>
         {this.showContact()}
      </table>
      </div>   
      </div>
    );
  }
}

export default App;

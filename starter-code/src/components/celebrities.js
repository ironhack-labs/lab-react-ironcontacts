import React, { Component } from 'react';
import '../App.css';
import contacts from "../contacts.json";

export default class celebrities extends Component {
  constructor(props){
    super(props)
    this.state = {
      fivecontacts: contacts.slice(0,5),

    } 
    this.addRandom = this.addRandom.bind(this)
    this.sortByName = this.sortByName.bind(this)
    this.sortByPopularity = this.sortByPopularity.bind(this)
    
  }

  addRandom(){ 
    var newArray = [...this.state.fivecontacts]
    var random = Math.floor(Math.random() * contacts.length)
    newArray.push(contacts[random])
    this.setState({fivecontacts:newArray})

  }

sortByName(){
  var sorted = this.state.fivecontacts
  // console.log(sorted)
  sorted.sort(function (a,b){
    if(a.name < b.name){
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  })

  this.setState({...this.state, fivecontacts: sorted})

}
sortByPopularity(){
  var sorted = this.state.fivecontacts
  // console.log(sorted)
  sorted.sort(function (a,b){
    if(a.popularity < b.popularity){
      return 1;
    } else if (a.popularity > b.popularity) {
      return -1;
    } else {
      return 0;
    }
  })

  this.setState({...this.state, fivecontacts: sorted})
  
}


  render() {
  
    var celebrities = this.state.fivecontacts.map((contact)=>{
      return <tr>
                <td>
                  <img src={contact.pictureUrl} width="80px" />
                </td>
                <td>
                 <h1>{contact.name}</h1>
                </td>
                <td>
                  <h4>{contact.popularity}</h4>
                </td>
              </tr>
    })

    return (
      <div className="App">
          <h1>IronContacts</h1>
          <button onClick={this.addRandom}>Add random</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
          <table>
            <tr>

              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            
              {celebrities}



          </table>
      </div>
    );
  }
}


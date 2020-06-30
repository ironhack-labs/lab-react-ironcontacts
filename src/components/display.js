import React, { Component } from 'react';
import contacts from '../contacts.json';


import '../App.css';

class Display extends Component {
  state = {
    FullList: [...contacts].splice(5),
    FirstFiveContacts: [...contacts].splice(0, 5),
  };

  extractData = () => {
    let contactList = this.state.FirstFiveContacts.map((eachContact,i) => {
      return (
        <tr key={eachContact.name}>
          <td>
            <img
              style={{ width: '100px' }}
              src={eachContact.pictureUrl}
              alt={eachContact.name}
            />
          </td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity.toFixed(2)}</td>
          <td><button onClick ={()=>this.deleteContact(i)}>Delete</button></td>
        </tr>
        
      );
    });
    return contactList;
  };

  randomContact = () => {
   let randomIndex = Math.floor(Math.random()*this.state.FullList.length) // Random Contact
   let FirstFiveContactsCopy = [...this.state.FirstFiveContacts] // copy of orignal
   let FullListCopy = [...this.state.FullList] // copy of original
   FirstFiveContactsCopy.push(FullListCopy[randomIndex]) // add random contact from full list to FirstFive
   FullListCopy.splice(randomIndex,1) // Start at a random index and remove one

   this.setState({
       FirstFiveContacts:FirstFiveContactsCopy,
       FullList:FullListCopy
   })
  };

  sortByName = () =>
  {
    let FirstFiveContactsCopy = [...this.state.FirstFiveContacts]
    FirstFiveContactsCopy.sort((a,b) =>
    {
        if(a.name > b.name){
            return 1
        }
        else if(a.name < b.name)
        {
            return -1
        }
        return 0
    })

    this.setState({
        FirstFiveContacts:FirstFiveContactsCopy
    })

  };

  sortByPopularity = () =>
  {
    let FirstFiveContactsCopy = [...this.state.FirstFiveContacts]
    FirstFiveContactsCopy.sort((a,b) =>
    {
        if(a.popularity > b.popularity){
            return 1
        }
        else if(a.popularity < b.popularity)
        {
            return -1
        }
        return 0
    })
    
    this.setState({
        FirstFiveContacts:FirstFiveContactsCopy
    })

  };

  deleteContact = (index) =>{
      let FirstFiveContactsCopy = [...this.state.FirstFiveContacts]
      FirstFiveContactsCopy.splice(index,1)
      this.setState({
        FirstFiveContacts:FirstFiveContactsCopy
      })
  }

  render() {
    return (
      <table className="tableStyle">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {this.extractData()}
        </tbody>
      </table>
    );
  }
}

export default Display;

import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json'

import React, { Component } from 'react'



class Contacts extends Component {

state = {
  fiveContacts: contacts.slice(0,5),
  sortType: 'a',
  
  
};

addRandomContact = () => {

  const randomPick = contacts[Math.floor(Math.random() * contacts.length)]
 
  this.setState({fiveContacts: [randomPick, ...this.state.fiveContacts]})


}

removeActor(actor){
  
const spreadContacts = [...this.state.fiveContacts];

spreadContacts.splice(actor, 1);

this.setState({fiveContacts: spreadContacts})

}

sortAlphabetically = () => {

  // for(let i = 0; i<this.state.fiveContacts.length; i++){
  //   const newfive = this.state.fiveContacts
  //   if(a.newfive[i].name < b.newfive[i].name){
  //     return -1;
  //   }else if (a.newfive[i].name > b.newfive[i].name) {
  //     return 1
  //   }
  // }
 

  //   if(a.this.state.fiveContacts < b.this.state.fiveContacts){
  //     return -1
  //   }else if(a.this.state.fiveContacts > b.this.state.fiveContacts){
  //     return 1
  //   }

  // }

 
  this.state.fiveContacts.sort((a, b) => {
    const isSorted = (this.state.sortType === 'a') ? 1 : -1;
    return isSorted * a.name.localeCompare(b.name)
  })

  this.setState({sortType: this.state.sortType})


}

sortByPopularity = () => {


 
  this.state.fiveContacts.sort((a, b) => {
  return b.popularity - a.popularity 
  })

  this.setState({sortPop: this.state.sortPop})


}





  render() {

    

    return (
      <div>
        <h1>IronContacts</h1>

<button onClick={this.addRandomContact}>Add Contact</button>
<button onClick={this.sortAlphabetically}>Sort By Name</button>
<button onClick={this.sortByPopularity}>Sort By popularity</button>



        <table>
           <thead>
             <tr>
               <th>Picture</th>
               <th>Name</th>
               <th>Popularity</th>
               <th>Delete</th>
             </tr>
             
           </thead>
        {this.state.fiveContacts.map((contact, index) => (
          <tbody key={contact.id}>
            <tr >
            <td>
                <img src={contact.pictureUrl} style={{width:"80px"}} />
              </td>
              <td>
                {contact.name}
              </td>
             
              <td>
                {contact.popularity.toFixed(2)}
              </td>
              <td>
              <button onClick={() => this.removeActor(index)}>Remove Actor</button>
              </td>
            
              
            </tr>


          </tbody> 
          
        ))}
        </table>
      </div>
    )
  }
}








function App() {
  return (
    <div className="App">
      MFs
      <Contacts/>
      
    </div>
  );
}

export default App;

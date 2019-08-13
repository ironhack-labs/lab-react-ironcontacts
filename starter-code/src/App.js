import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json'
import Table from './components/Table'

class App extends Component {


constructor () {
  super()
  this.state = {
    listOfContacts : contacts.splice(0,5)
    
  }
}

  render() {
    console.log(this.state)
    const eachContact = [...this.state.listOfContacts]

    return (
      <div className="container"> 
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

          {
          eachContact.map((elm, idx) => {
              return (
                 <Table key={idx} picture= {elm.pictureUrl} name={elm.name} popularity={elm.popularity}/>

              )
            })
          }
              </tbody>
          </table>
      </div>
    );
  }
}




export default App;

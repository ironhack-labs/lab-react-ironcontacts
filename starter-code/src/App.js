import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Item from './Item'

class App extends Component {
    constructor(){
        super();
        this.state = {
            selection: {
                name: ""
            },
            data: contacts,
            contactList: []
        }
    }



    createArray = (contacts) => {
        for (let i = 0; i < 5; i++) {
            this.state.contactList.push(contacts[i]);
        }
    };

  render() {

      this.createArray(contacts);
      console.log(this.state.contactList);
    return (
      <div className="App">
        <table>
            <tbody>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
            {this.state.contactList.map((item,index) => <Item key={index} item={item}/>)}
            </tbody>
        </table>

      </div>
    );
  }
}

export default App;

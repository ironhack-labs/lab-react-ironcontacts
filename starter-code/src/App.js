import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Item from './Item'
import Button from './Button'

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

componentWillMount(){
    this.createArray(contacts);
}

    createArray = (contacts) => {
        for (let i = 0; i < 5; i++) {
            this.state.contactList.push(contacts[i]);
        }
    };

    handleClick = ()=> {
        let random = Math.floor(Math.random()* this.state.data.length);
        let newRandom = this.state.data[random];
        let {contactList} = this.state;
        contactList.push(newRandom);
        console.log(contactList);
        this.setState({contactList});
    };

    sortByName = () => {
        let {contactList} = this.state;
        contactList.sort(function(a,b){
            var x = a.name.toLowerCase();
            var y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        this.setState({contactList});
    }

    sortByPopularity = () => {
        let {contactList} = this.state;
        contactList.sort(function(a,b){return a.popularity - b.popularity});
        this.setState({contactList});
    }

  render() {


      console.log(this.state.contactList);
    return (
      <div className="App">
          <Button handleClick={this.handleClick} sortByName={this.sortByName} sortByPopularity={this.sortByPopularity} />
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

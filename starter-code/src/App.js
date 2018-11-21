import React, { Component } from 'react';
import Item from './Item';
import Button from './Button';
import contacts from './contacts.json';


class App extends Component {
    constructor(){
        super();
        this.state = {
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
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        this.setState({contactList});
    };

    sortByPopularity = () => {
        let {contactList} = this.state;
        contactList.sort(function(a,b){return a.popularity - b.popularity});
        this.setState({contactList});
    };

    deleteItem = (index) => {
        let {contactList} = this.state;
        contactList.splice(index, 1);
        this.setState({contactList});
    };

  render() {


      console.log(this.state.contactList);
    return (
      <div className="App">
          <h1>IronContacts</h1>
          <Button handleClick={this.handleClick} sortByName={this.sortByName} sortByPopularity={this.sortByPopularity} />
        <table>
            <tbody>
            <tr className="titles-container">
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
            </tr>
            {this.state.contactList.map((item,index) => <Item key={index} index={index} item={item} deleteItem={this.deleteItem}/>)}
            </tbody>
        </table>

      </div>
    );
  }
}

export default App;

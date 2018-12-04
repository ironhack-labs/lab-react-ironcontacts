import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Table from './components/table';

class App extends Component {
  constructor(){
    super()

    this.state = {
      contacts:contacts.slice(0,5)
    }

  }
  addRandomContact = () =>{
    let newArray = [...this.state.contacts]
    var random = Math.floor(Math.random() * (contacts.length - 5) + 5);
    newArray.push(contacts[random]);
    this.setState({contacts: newArray})

  }

  sortByName = ()=>{
    let newArray = [...this.state.contacts]
    newArray.sort((a,b)=>(a.name>b.name)?1:((b.name>a.name)?-1:0))
    this.setState({contacts: newArray})
  }

  sortByPopularity =() =>{
    let newArray = [...this.state.contacts]
    newArray.sort((a,b)=>(a.popularity>b.popularity)?-1:((b.popularity>a.popularity)?1:0))
    this.setState({contacts: newArray})
  }


  render() {
    return (
      <div className="App">
        <Table {...this.state.contacts} addRandomContact={this.addRandomContact} sortByName={this.sortByName} sortByPopularity={this.sortByPopularity}/>
      </div>
    );
  }
}

export default App;

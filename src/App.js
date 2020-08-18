import React from 'react';
import './App.css';
import List from './components/List'
import contacts from './contacts.json';
import AddContact from './components/AddContact';
import SortByName from './components/SortByName'
import SortByPopularity from './components/SortByPopularity'


class App extends React.Component{
  constructor (props){
    super (props)
    this.state={
      list: contacts.slice(0,5)
    }
  }

  handleAdd=()=>{
    let newContact =contacts[Math.floor((Math.random()*contacts.length))]
    this.setState({list: [...this.state.list, newContact]})
  }

  sortName=()=>{
    let cloneContacts = [...this.state.list]
    cloneContacts.sort((a,b)=>{
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    console.log (cloneContacts)
    this.setState({list: cloneContacts})
  }

  sortPopularity=()=>{
    let cloneContacts = [...this.state.list]
    cloneContacts.sort((a,b)=>{
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    });
    this.setState({list: cloneContacts})
  }

  handleDelete=(id)=>{
    console.log(this)
    let cloneContacts = [...this.state.list]
    cloneContacts.splice(id, 1)
    this.setState({list: cloneContacts})
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1>IronContacts</h1>
        </header>
        <div>
        <AddContact onAdd={this.handleAdd}/>
        <SortByName onName={this.sortName}/>
        <SortByPopularity onPop={this.sortPopularity}/>
        </div>
        <List contacts={this.state.list} onDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default App;

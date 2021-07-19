import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contact from './Components/Contact/ContactForm';

class App extends Component {
  state={
    contacts: contacts,
    first5: [...contacts].splice(0,5),
  }

  addContact = ()=>{
    let restOfContact=[...this.state.contacts];
    let randomIndex=Math.floor(Math.random()*(restOfContact.length));
    let contact= restOfContact[randomIndex];
    let addList = [...this.state.first5,contact];
    this.setState({first5:addList});
  }

  search=(event)=>{
    debugger
    let searchText=event.target.value.toLowerCase();
    if(searchText !== ""){
      let contactSearch=[...this.state.contacts];
      let searched=contactSearch.filter(contact=>{
        let contactName=contact.name.toLowerCase();
        return contactName.includes(searchText)
      });
      this.setState({first5:searched});
    }else{
      let list=[...this.state.contacts];
      let newList=list.splice(0,4)
      this.setState({first5:newList})
    }
  }

  sortByName=()=>{
    let contactSorted =[...this.state.first5];
    contactSorted.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  })
  this.setState({first5:contactSorted})
  }

  sortByProp=()=>{
    let contactSorted =[...this.state.first5];
    contactSorted.sort(function(a, b){
      if(a.popularity < b.popularity) { return 1; }
      if(a.popularity > b.popularity) { return -1; }
      return 0;
  })
  this.setState({first5:contactSorted})
  }

  deleteContact=(index)=>{
    debugger
    const list = [...this.state.first5];
    list.splice(index, 1);
    this.setState({first5: list});
  }

    render() {
      debugger
      let eachContact=this.state.first5.map((contact,index)=>(
        <Contact
          deleteContact={this.deleteContact}
          index={index}
          name={contact.name}
          image={contact.pictureUrl}
          popularity={contact.popularity}
        />
      ))
        return ( 
          <div className = "App" >
            <h1>Awesome contacts</h1>
            <input onChange={this.search} type="text"/>
            <div className="title">
              <h3>Picture</h3>
              <h3>Name</h3>
              <h3>Popularity</h3>
            </div>
            <button onClick={this.addContact}>Add random</button>
            <button onClick={this.sortByName}>Sort by name</button>
            <button onClick={this.sortByProp}>Sort by popularity</button>
            {eachContact}
          </div>
        );
    }
}

export default App;

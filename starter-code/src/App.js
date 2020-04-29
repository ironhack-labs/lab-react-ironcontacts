import React, { Component } from "react";
import ContactComponent from "./components/ContactComponent";
import "./App.css";
import contacts from "./contacts.json";
import Box from "./components/Box"

class App extends Component {
  state = {
    items: [],
  };
  componentDidMount() {
    this.setState({ items: contacts.slice(0, 5) });
  }
 
  addRandomContact=()=>{
    const newContact = contacts[Math.floor(Math.random()*contacts.length)]
    const newArray = [...this.state.items, newContact]
    //console.log(newArray)
    this.setState({items: newArray})
  }

  sortByName=()=>{
  
   const sortedList = [...this.state.items].sort((a,b)=>{
     
      if(a.name<b.name){
        return -1
      }
      if(a.name>b.name){
        return 1
      }
      return 0
    })
    this.setState({items:sortedList})
  }

  sortByRate=()=>{
    const sortedList = [...this.state.items].sort((a,b)=>{
     return b.popularity-a.popularity
       
    })
    this.setState({items:sortedList})
  
  }
  deleteContact=(index)=>{
    console.log({index});
    const newItems=[...this.state.items]
    newItems.splice(index, 1)
    this.setState({items:newItems})
  }

  render() {
    return (
      <div className="App">
        <Box>
          <button onClick={this.addRandomContact}>Add new contact</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortByRate}>Sort by popularity</button>
        </Box>
        <ContactComponent contacts={this.state.items} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}

export default App;

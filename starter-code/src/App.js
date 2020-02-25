import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Celebrity from "./components/Celebrity";
import contacts from "./contacts.json";


class App extends Component {
  state={
    contactsList: contacts.slice(0,5)
  }

  clickHandler = () => {
    const updatedContactList = this.state.contactsList;
    updatedContactList.push(contacts[Math.floor(Math.random() * contacts.length)]);
    this.setState({ contactsList: updatedContactList });
  };

  sortByName = () =>{
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
    
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    const sortedByNameList = this.state.contactsList.sort(compare);
    this.setState({contactsList: sortedByNameList});
  };

  sortByPopularity = () =>{
    function compare(a, b){
      const popularityA = a.popularity;
      const popularityB = b.popularity;

      let comparison = 0;
      if(popularityA> popularityB){
        comparison = -1;
      } else if(popularityA < popularityB){
        comparison = 1;
      }
      return comparison;
    }
    const sortedByPopularity = this.state.contactsList.sort(compare);
    this.setState({contactsList: sortedByPopularity});
  }

  deleteCeleb = (id) =>{
    console.log("somethign");
    const contactsCopy = this.state.contactsList.filter(contact => contact.id !== id);
    this.setState({ contactsList: contactsCopy });
  }

  render() {
    return(
      <div className="App">
        <button onClick={this.clickHandler}>Get a random celebrity</button>  
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
      {
        this.state.contactsList.map(contactObj =>{
          return(
          <Celebrity 
            key = {contactObj.id}
            url = {contactObj.pictureUrl}
            name = {contactObj.name}
            popularity = {contactObj.popularity.toFixed(2)}
            deletedCeleb = {()=>this.deleteCeleb(contactObj.id)}
          />
          );
        })
      }
      </div>
    );
  }
}

export default App;
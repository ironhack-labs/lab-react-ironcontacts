import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Card from './components/Card/Card';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts : [
        contacts[0],
        contacts[1],
        contacts[2],
        contacts[3],
        contacts[4]
      ]
    }
  }


  addRandom = () =>{
    let clone = [...this.state.contacts];

    //this makes sure the first random contact isn't repeated, but it doesn't check after that:
    let randomContact = contacts[(Math.floor(Math.random()*(contacts.length-5))+5)];

    clone.unshift(randomContact);
    this.setState({contacts: clone})
  }


  sortByName = () =>{
    let clone = [...this.state.contacts];

    clone.sort((a,b)=>{
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    })
    this.setState({contacts: clone})
  }


  sortByPop = () =>{
    let clone = [...this.state.contacts];

    clone.sort((a,b)=>{
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (b.popularity > a.popularity) {
        return 1;
      }
      return 0;
    })
    this.setState({contacts: clone})
  }


  delete = (index) =>{
    let clone = [...this.state.contacts];
    clone.splice(index, 1)
    this.setState({contacts: clone})
  }

  showContacts = () => {
    return(
      this.state.contacts.map((eachContact, i)=>{
        return(

          <Card
            key = {i}
            Delete = {()=>{this.delete(i)}}
            Name = {eachContact.name}
            Picture = {eachContact.pictureUrl}
            Popularity = {eachContact.popularity}
            />
          )
      })
    )  
  }

  
  render() {
    return (
      <div className="AppPage">
        <div className="btns">
          <button onClick={this.addRandom}>ADD RANDOM</button>
          <button onClick={this.sortByName}>SORT BY NAME</button>
          <button onClick={this.sortByPop}>SORT BY POPULARITY</button>
        </div>
        <div className="App">
          {this.showContacts()}
          {/* {this.delete} */}
        </div>
      </div>
    );
  }
}

export default App;
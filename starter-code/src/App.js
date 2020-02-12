import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contacthandler from './contact';

let contVar = 4;

class App extends Component {
  
  state = {
    contactArr: contacts.slice(0,contVar)

  }

  showContactArr = () => {
    return this.state.contactArr.map((eachContact, index) => {
      return <tr key={index}>
      <td><img className="mugshots" src={eachContact.pictureUrl} alt={eachContact.name}/></td>
      <td>{eachContact.name}</td>
      <td>{eachContact.popularity}</td>
      <td><button onClick={() => this.deleteContact(index)}> DELETE </button></td>
    </tr>
    })
  }

  // iteration 2: Generate random function
  randomContact = () => {
    let x = (Math.floor(Math.random()*contacts.length));
    // while(this.state.contactArr.includes())
    let RandomContactArr = [...this.state.contactArr]
      RandomContactArr.push(contacts[x])
    this.setState({
      contactArr:RandomContactArr
    })
  }

  sortByName = () => {
    let sortedArr = [...this.state.contactArr];
    sortedArr.sort(function(a, b){
      return a.name.localeCompare(b.name);
    })
    this.setState({
      contactArr: sortedArr
    })
  }

  sortPopularity = () => {
    let populSortedArr = [...this.state.contactArr];
    populSortedArr.sort(function(c, d){
      return c.popularity-d.popularity;
    })
    this.setState({
      contactArr: populSortedArr
    })
  }

  deleteContact = (i) =>{
    let deletedContactArr = [...this.state.contactArr]
    deletedContactArr.splice(i,1)
    this.setState({
      contactArr: deletedContactArr
    })
  }

  render() {
    // console.log(this.state.contactArr)
    return (
      <>
      <h1 className="App">IronContacts</h1>
        <br></br>
        {/* on click event calls an anonymous function that can have a passed parameter: */}
         <div className="buttons">
          <button onClick={() => this.randomContact()}> 
            Generate Random Actor
          </button>
          <button onClick={() => this.sortByName()}> 
            Sort By Name
          </button>
          <button onClick={this.sortPopularity}> 
            Sort By Popularity
          </button>
          </div> 
        <br></br>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.showContactArr()}
        {/* <Contacthandler /> */}
          </tbody>
        </table>

      </>
    );
  }
}

export default App;

// let contactArr = [];
// filterFunc = () => {
//   for(let i=0; i<5; i++){
//     contactArr.push(contacts[i])
//   }}
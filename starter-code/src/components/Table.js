import React, { Component } from 'react';
import contacts from '../contacts.json';

const newArr = contacts.splice(0, 5);


export class Table extends Component {
  
  constructor(){
    super();
    this.state = {
      contacts: newArr
    }}
    
    addContactToArray(e) {
      newArr.push(e);
      this.setState({contacts:newArr});
    }

    sortByName(e) {
      console.log(e)
      let copy=e.sort(function(a, b){
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
    });
    this.setState({contacts:copy});
    }

    sortByPopularity(e) {
      console.log(e)
      e.sort(function(a, b){return a.popularity - b.popularity});
    this.setState({contacts:e});
    }

    deleteMovieByIndex(idx){
      this.state.contacts.splice(idx,1);
      this.setState({contacts:this.state.contacts});
  }
    
    
    render() {
      
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    return (
      <div className="Table">
      <button onClick={() => this.addContactToArray(randomContact)}>Add Random Contact</button>
      <button onClick={() => this.sortByName(newArr)}>Short by Name</button>
      <button onClick={() => this.sortByPopularity(newArr)}>Short by Popularity</button>

        <table className="dennis">
          <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th> 
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            { this.state.contacts.map((oneContact,index) => {
              return (
              <tr>
        <td><img src={oneContact.pictureUrl} alt="" width="100"></img></td>
        <td>{oneContact.name}</td>
        <td>{Math.round(oneContact.popularity * 100) / 100}</td>
        <td><button onClick={() => this.deleteMovieByIndex(index)}>Delete</button></td>
          </tr>)
            }
            )}
          </tbody>
        </table>
      </div>
    );
}
}
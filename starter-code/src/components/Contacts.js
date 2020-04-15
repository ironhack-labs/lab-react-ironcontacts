import React, { Component } from "react";
import "../App.css";
import contacts from "../contacts.json";

class Cont extends Component {
  constructor() {
    super();
    this.state = {
      people: [contacts[0] , contacts[1],contacts[2],contacts[3],contacts[4]]
    };
  }

  addRandom = () => {

let ran = Math.floor(Math.random() * this.state.people.length) 

this.setState({people:  [  ...this.state.people ,  contacts[ran]]})   

}
pop= () => {

let arr = []
 arr = contacts.sort((a, b) => (b.popularity.toFixed(2)) - (a.popularity.toFixed(2)))
console.log(arr)

this.setState({people:  [  ... arr]})   

}
name = () => {

let arr = []
arr = contacts.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)); 

console.log(arr)

this.setState({people:  [  ... arr]})   

}
removeRow = (event,item) => {  
  var array = [...this.state.people]; // make a new copy of array instead of mutating the same array directly. 
  var index = array.indexOf(item)
  array.splice(index, 1);
  this.setState({people: array});
  }

  render() {
    return (
      <div>
        <button onClick={this.addRandom}>Add random Contact</button>
           <button onClick={this.pop}>popularity Sort</button>
             <button onClick={this.name}>Name Sort</button>
        <table className="App-title margin">
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>

          <tbody>
            {this.state.people.map((item,index) => {
              return (
                <tr key={index}>
                  <td><img alt="1" src={item.pictureUrl}></img></td>
                  <td>{item.name}</td>
                  <td>{item.popularity}</td>
                    <td><button onClick={(event) => this.removeRow(event, item)}>Delete</button></td>
                </tr>
              );
            })}
            {/* 
              {array.map((person, index) => (
      <tr key={index}>
            <td><img alt="1" src={person.pictureUrl}></img></td>
            <td>{person.name}</td>
            <td>{person.popularity.toFixed(2)}</td>
          
        </tr>

              ))} */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cont;

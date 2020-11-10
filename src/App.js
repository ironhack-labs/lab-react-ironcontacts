import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Row from './Row.js'



class App extends Component{
  state={
    newArray:contacts.filter((ele,index)=>{
      return index<=4 ;
    })

  }
  addRandom(){
    let newArraycopy=[...this.state.newArray]
    let randomindex= Math.floor(Math.random()*contacts.length)
    newArraycopy.push(contacts[randomindex])
    this.setState({
      newArray:newArraycopy
    })

  }
  sortByName(){
    let newArraycopy=[...this.state.newArray]
    newArraycopy.sort((a,b)=>{
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;

    })

    this.setState({
      newArray:newArraycopy
    })
  }

  sortByPopularity(){
    let newArraycopy=[...this.state.newArray]
    newArraycopy.sort((a,b)=>{
      if ( a.popularity > b.popularity ){
        return -1;
      }
      if ( a.popularity < b.popularity){
        return 1;
      }
      return 0;

    })

    this.setState({
      newArray:newArraycopy
    })
  }

  deleteObject(index){
    let newArraycopy=[...this.state.newArray]
    newArraycopy.splice(index,1)
    this.setState({
      newArray:newArraycopy
    })
  }


  render(){
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <div className="flex">
      <button onClick={this.addRandom.bind(this)}>Add Random Contact</button>
      <button onClick={this.sortByName.bind(this)}>Sort by Name</button>
      <button onClick={this.sortByPopularity.bind(this)}>Sort By Popularity</button>
      </div>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {this.state.newArray.map((ele, index)=>{
          return <Row key={index} {...ele} clickToDelete={()=>this.deleteObject(index)}></Row>

        })}

        
      </table>
  
      </div>
    );

  }
  
}

export default App;

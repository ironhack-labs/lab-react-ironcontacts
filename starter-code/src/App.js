import React, { Component } from 'react';
import logo from './logo.svg';
import contacts from './contacts.json';
import './App.css';


let starList = [...contacts]
// console.log(starsList)
class App extends Component {

   state = {
     stars : starList.slice(0,5)

   }
addStar=()=>{
  //var item = items[Math.floor(Math.random()*items.length)];
  let RandomStar = starList[Math.floor(Math.random()*starList.length)]
  this.setState ({
    stars:this.state.stars.concat(RandomStar)
  })
}
sortByName = ()=>{
  let sortedList = [...this.state.stars].sort((a,b) => a.name.localeCompare(b.name))
  console.log(sortedList)
  this.setState ({
    stars:sortedList
  })
}

sortByPopularity = ()=>{
  let sortedPopularity = [...this.state.stars].sort((a,b) => b.popularity - a.popularity)
  console.log(sortedPopularity)
  this.setState ({
    stars:sortedPopularity
  })
}

delete = (name) => {

  let deleted = [...this.state.stars].filter(el => {
   return el.name !== name
  })
  this.setState({
    stars:deleted
 })
}



  render() {
    const listOfStars = this.state.stars.map(el => { 
      // console.log(el.id)
      return (
       
        
    <tr>
      <td> <img height = "100px" src = {el.pictureUrl}/> </td>
      <td>{el.name}</td>
      <td>{el.popularity.toFixed(2)}</td>
      <td><button onClick = {()=>this.delete(el.name)}>Delete</button></td>
    </tr>
     // button e onclick function call korle ()=>evabe dite hbe 
       
    
     
     )})
    // console.log(this.state.stars)
    return (
      <div>
        <button onClick = {this.addStar}>Add Random contact</button>
        <button onClick = {this.sortByName}>Sort By Name</button>
        <button onClick = {this.sortByPopularity}>Sort By Popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
      {listOfStars}
      </table>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import Contacts from '../contacts.json'
import Tablerow from './Tablerow';
const mapping = Contacts.map ((element ) => element )

class Table extends Component{
  
  state = { 
    list: Contacts.splice(0,5)
  }

  handleAddRandom = () => {
    const newActorsArr = [...Contacts]
    let index  = Math.floor(Math.random() * Contacts.length)
    let randomList = [...this.state.list, newActorsArr[index]]
    Contacts.splice(index, 1)
    this.setState({
      list: randomList
      
    })
  }
  
  handleSortList = () => {
  const sortListPop = this.state.list.map((element) => element).sort((a,b) => b.popularity-a.popularity)
  const newSortList = [...sortListPop]
  console.log(sortListPop)
  this.setState({
    list: newSortList
  })
}

handleSortName = () => {
  const sortListName = this.state.list.map((element) => element).sort((a,b) => 
  {if(a.name > b.name){
    return 1}
    else if(a.name < b.name){
      return -1
    } return 0})
  const newNameSortList = [...sortListName]
  this.setState({
    list:newNameSortList
  })
}

handleDeleteMovie = (id) => {
  const newMovies = [...this.state.list] 
  const index = newMovies.findIndex((movie) => movie.id === id);
  newMovies.splice(index, 1);
  this.setState({
    list: newMovies
  });
};

render(){
  return(
    <div>
    <button onClick = { () =>{this.handleAddRandom()}}>Add Random Contact</button>
    <button onClick = { () =>{this.handleSortList()}}>Sort List by Popularity</button>
    <button onClick = { () =>{this.handleSortName()}}>Sort List by Name</button>
    <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
      </tr>
      {this.state.list.map((actor) => <Tablerow key = {actor.id} {...actor} deleteMovie = {this.handleDeleteMovie} /> )}
    </table>
    </div>
  )
}
}



    

export default Table
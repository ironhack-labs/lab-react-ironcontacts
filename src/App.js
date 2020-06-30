import React, { Component } from 'react';
import contacts from './contacts.json';


class App extends Component {

  state = {
    showingContacts: [...contacts].splice(0,5), //This will have the first 5 
    restOfContacts: [...contacts].splice(5),  //This will have everyone else excpet the first 5 
  }

  showContacts = () => {
    return this.state.showingContacts.map((item , i)=> {
      return (
        <tr className="row" key={item.id, i}>
          <td><img className="pic" style={{width: '50px'}}src={item.pictureUrl} alt ="pic"/></td>
          <td> {item.name}</td>
          <td>{item.popularity}</td>
          <td><button onClick ={() =>this.deleteRow(i)}>Delete</button></td>
        </tr>
      )
    })
  }

  deleteRow = (index) =>{
    let showingContactsDelete = [...this.state.showingContacts]
    showingContactsDelete.splice(index, 1)
    this.setState({
      showingContacts: showingContactsDelete
    })
  }
  randomContact =() =>{
    let index = Math.floor(Math.random()*this.state.restOfContacts.length)
    let showingContactsCp = [...this.state.showingContacts]
    let restOfContactsCp = [...this.state.restOfContacts]
    showingContactsCp.push( restOfContactsCp[index])
    restOfContactsCp.splice(index, 1)
    this.setState({
      showingContacts: showingContactsCp,
      restOfContacts: restOfContactsCp
    })
  }
  sortName = () => {
    let showingContactsCp = [...this.state.showingContacts]
    let sortedCp = showingContactsCp.sort((a,b) => {
      return a.name.localeCompare(b.name)
      // if(a.name > b.name){
      //   return 1
      // } else if(a.name < b.name){
      //   return -1
      // }
      // return 0
    })
    this.setState({
      showingContacts: sortedCp
    })
  }
  sortPop = () => {
    let showingContactsCp = [...this.state.showingContacts]
     showingContactsCp.sort((a,b) => {
      return a.popularity - b.popularity
     })
      this.setState({
        showingContacts: showingContactsCp
      })
    }
  render() {
    return (
      <div>
        <h1>IronContacts</h1> 
        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick = {this.sortName}>Sort by name</button>
        <button onClick ={this.sortPop}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Pictures</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { this.showContacts() }
          </tbody>        
        </table>
      </div>
    );
  }
}

export default App;
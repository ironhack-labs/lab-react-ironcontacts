import React, { Component } from 'react'
import './App.css'
import contacts from './../contacts.json'
import Table from './Table'



class App extends Component {

  constructor() {
    super()
    this.state = {
      contacts: contacts.slice(0, 5)
    }
  }

    addRandom = () => {
    const celebrities = [...this.state.contacts]
    const random =  contacts[Math.floor(Math.random()*contacts.length)]
    celebrities.push(random)
    
    this.setState({contacts: celebrities})
  };
    
    sortByName = ()=> {
    let names = [...this.state.contacts]
    names.sort((a,b) =>{
       if(a.name < b.name){
        return -1
       } else if(a.name > b.name){
         return 1
       } else{
         return 0
       }
      })    
     this.setState({contacts: names})
    }
  
  sortByPopularity = () => {
    let popularity = [...this.state.contacts]
    popularity.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1
      } else {
        return -1
      }
    })
    this.setState({contacts: popularity})
  }

  
  render() {
    return (
      <>
        <h2>Iron Contacts</h2>
        <button onClick={() => this.addRandom()}>Add Random</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <Table celebs={this.state.contacts}/>        
                    
      </>
    )
  }
}

export default App

import contactsFull from './contacts.json'
import React, {Component} from 'react'
import Row from './Row'
import './Home.css'


class Home extends Component{
  
  state = {contacts:contactsFull.splice(0,5),
           countOfContactAlreadyDisplayed:0   
  }

  addRandomContact = () => {
    var isRandomAlreadyDisplayed = false
    const randomContact = contactsFull[Math.floor(Math.random()*contactsFull.length)]

    for(var i = 0;i<this.state.contacts.length;i++){
      if(this.state.contacts[i].name === randomContact.name){
        isRandomAlreadyDisplayed = true
        break
      }
    }
    if(!isRandomAlreadyDisplayed){
      this.state.contacts.push(randomContact)

      this.setState({
      contacts:this.state.contacts
      })
    }else{
      this.setState({
        countOfContactAlreadyDisplayed:this.state.countOfContactAlreadyDisplayed+1
        })
    }
  }

  sortByPopularity = () =>{
    this.state.contacts.sort(this.comparePopularity)
    this.setState({
      contacts:this.state.contacts
      })
  }

  comparePopularity = (a,b)=> {
    if (a.popularity < b.popularity)
      return -1;
    if (a.popularity > b.popularity)
      return 1;
    return 0;
  }

  sortByName = () =>{
    this.state.contacts.sort(this.compareName)
    this.setState({
      contacts:this.state.contacts
      })
  }

  compareName = (a,b)=> {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

  deleteRow = (index) => {
    const filteredContacts = this.state.contacts
    filteredContacts.splice(index, 1)
    this.setState({
        contacts: filteredContacts
    })
  }
  

  render(){
    console.log(this.state.contacts)
    return(
      <div>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <p>Contactos repetidos que quisieron ser agregados: {this.state.countOfContactAlreadyDisplayed}</p>
        <button onClick={this.sortByPopularity}>Ordenar por popularidad</button>
        <button onClick={this.sortByName}>Ordenar por nombre</button>
      <tbody>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        {this.state.contacts.map((contact,index)=><Row key={index} {...contact} deleteFunc={() => this.deleteRow(index)}/>) }
      </tbody>
      </div>
    )
  }

}

export default Home


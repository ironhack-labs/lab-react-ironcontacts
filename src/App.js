import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './contacts.json'

class App extends React.Component{

  state={
    contacts:Data.splice(0,5),
  }

  addRandomContact = () =>{
    const randomIndex=Math.floor(Math.random()*(Data.length))
    // console.log(Data[randomIndex])
    this.setState((state,props)=>({
      contacts: state.contacts.concat(Data[randomIndex])
    }))
  }

  sortByName=()=>{
    this.setState((state,props)=>({
      contacts:state.contacts.sort(
        (a,b)=>(a.name>b.name)?1:((b.name>a.name)?-1:0)
      )
    }))
  }

  sortByPopularity=()=>{
    this.setState((state,props)=>({
      contacts:state.contacts.sort(
        (a,b)=>(a.popularity>b.popularity)?1:((b.popularity>a.popularity)?-1:0)
      )
    }))
  }

  deleteContact=(event)=>{
    // console.log(event.target.parentElement.parentElement.getAttribute('data-key'))
    const deleteIndex=event.target.parentElement.parentElement.getAttribute('data-key')
    
    this.state.contacts.splice(deleteIndex,1)
    // // const deleteIndex=
    this.setState((state,props)=>({
      contacts:this.state.contacts
    }))
  }

  render(){
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button id="add-random-btn" onClick={this.addRandomContact}>Add Random Contact</button>
      <button id="sort-by-name-btn" onClick={this.sortByName}>Sort by name</button>
      <button id="sort-by-popularity-btn" onClick={this.sortByPopularity}>Sort by popularity</button>
        
        <table>
          <thead style={{fontWeight:'bold'}}>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
          {
            this.state.contacts.map((contact)=>{
              return(      
              <tr key={contact.id} data-key={contact.id}>
                <td><img style={{width:'60px'}} src={contact.pictureUrl} alt=""/></td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity*100)/100}</td>
                <td ><button onClick={this.deleteContact}>Delete</button></td>
              </tr>)
            })
          }
          </tbody>
        </table>
    </div>
  );
}
}
export default App;

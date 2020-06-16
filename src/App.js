import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contact'

class App extends React.Component{

  state = {
    contacts : contacts,
    renderedContacts : contacts.slice(0,5)
  }


  addNew = () => {
    this.setState({renderedContacts: this.state.renderedContacts.concat(this.state.contacts[Math.floor(Math.random()*20+6)])})
  }

  deleteContact = (event) => {
    let newArray = [...this.state.renderedContacts]
    let index = newArray.findIndex(p=>p.name===event.target.name)
    newArray.splice(index,1)
    this.setState({
      renderedContacts:newArray})
  }

  sortByName = ()=>{
    let newArray = [...this.state.renderedContacts]
    newArray.sort(function(a,b){
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
    this.setState({
      renderedContacts:newArray
    })
  }

  sortByPop = ()=>{
    let newArray = [...this.state.renderedContacts]
    newArray.sort(function(a,b){
      return b.popularity-a.popularity
    })

    this.setState({
      renderedContacts:newArray
    })
  }

  render(){
  return (
    <div>
    <div>
      IronContacts
    </div>
    <button onClick={this.addNew}>Add new random contact</button>
    <button onClick={this.sortByName}>Sort by Name</button>
    <button onClick={this.sortByPop}>Sort by popularity</button>

    <table>
      <thead>
        <tr>
        <td>
          Picture
        </td>
        <td>
          Name
        </td>
        <td>
          Popularity
        </td>
        </tr>
      </thead>
          {this.state.renderedContacts.map(contact =>{
            return(
            <Contact key={contact.id}
              name={contact.name}
              popularity={contact.popularity}
              pictureUrl={contact.pictureUrl}
              delete = {this.deleteContact}
              ></Contact>
          )})}
      </table>
      </div>
  )
  }
}

export default App;

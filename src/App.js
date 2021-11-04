import './App.css';
import contacts from "./contacts.json";
import React from "react";

let newArr = contacts.slice(0, 5)

function renderRandomContact (){
  return contacts[Math.ceil(Math.random()*contacts.length)];
}
class Contact extends React.Component{
  render(){
    return(
      <div>
        <tr className="contact-details">
          <td><img src={this.props.pictureUrl} alt="actor"></img></td>
          <td>{this.props.name}</td>
          <td>{this.props.popularity}</td>
        </tr>
      </div>
    )
  }
}

class App extends React.Component{
  state = {
    newListContacts: newArr,
  }
  createRandomContact = ()=>{
    this.setState((prevState, props)=>{
      let randomContact =renderRandomContact();
      console.log(randomContact)
      return {newListContacts : [randomContact, ...prevState.newListContacts]}
    })
  }

  sortByName = ()=>{
    this.setState((prevState, props)=>{
      const sortedList = prevState.newListContacts.sort((a,b)=>{
        return a.name - b.name
      })
      return {newListContacts: sortedList}
    })
  }
  render(){
    return (
      <>
        <div className="App">
          <h1>IronContacts</h1>
          <div className="buttons">
            <button onClick={this.createRandomContact}>Add Random Contact</button>
            <button onClick={this.sortByName}>Sort by Name</button>
          </div>
          <table>
            <thead>
              <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.newListContacts.map((contact)=>{
                return <Contact key ={contact.id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}/>
              })}
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default  App;
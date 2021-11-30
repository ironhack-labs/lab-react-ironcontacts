
import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
const contactList = [...contacts];
 

class App extends Component {

  constructor() {
    super()
    //1. Instrucciones lista estática: montamos un estado con los datos
    this.state = {
      contactsFirst5: contactList.slice(0, 5),
    }
  }

  addContact(){
    let randomContact = Math.floor(Math.random() * contactList.length)
    const arr =[...this.state.contactsFirst5]
    arr.push(contactList[randomContact])
    this.setState({
      contactsFirst5: arr,
    })

  }
  orderAlph(){
    
    const arr =[...this.state.contactsFirst5]
    arr.sort((a,b )=> a.name.localeCompare(b.name))
    this.setState({
      contactsFirst5: arr,
    })

  }

  orderPopu(){
    
    const arr =[...this.state.contactsFirst5]
    arr.sort((a,b )=> b.popularity -  a.popularity)
    this.setState({
      contactsFirst5: arr,
    })

  }
  removeContact(contactID) {
  let arr =[...this.state.contactsFirst5]
  //4. Instrucciones delete: usando el ID que recibimos de la función nos quedamos con el resto de pelis
  arr = this.state.contactsFirst5.filter(eachContact => eachContact.id !== contactID)
 console.log("-------->>", contactID)
  //5. Instrucciones delete: sustituimos las peliculas por las nuevas
  this.setState({
    contactsFirst5: arr,
  })
  }

  render() {
    //2. Instrucciones lista estática: Mapeamos la lista desde el estado, 
    //pasandole las props que necesite
    return (
      <div>
      <div>
        <button onClick={() => this.addContact()}>Add Contact</button>
        <button onClick={() => this.orderAlph()}>Sort by Name</button>
        <button onClick={() => this.orderPopu()}>Sort by popularity</button>
      </div>
          <table>
          <thead>
            <tr>
              <th>PictureUrl</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
            </thead>

          <tbody>
          {
            this.state.contactsFirst5.map((eachContact) => (
            <tr key={eachContact.id}>
              <td><img src={eachContact.pictureUrl} /> </td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity.toFixed(2)}</td>
              <td><button onClick={() => this.removeContact(eachContact.id)}>Delete</button></td>
            </tr>
          ))}
          </tbody>
          </table>
      </div>

    )
    // this.state.movies.map((eachMovie) => (
    //   <MovieCard key={eachMovie.id} title={eachMovie.title} director={eachMovie.director} />
    // ))
  }

}

export default App

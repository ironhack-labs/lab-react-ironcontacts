import React from 'react'
import './App.css';
import contacts from './contacts.json'

class App extends React.Component {

  state = {
    fewContacts: [
      {
        "name": "Idris Elba",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
        "popularity": 11.622713,
        "id": "11731993-0604-4bee-80d5-67ad845d0a38"
      },
      {
        "name": "Johnny Depp",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
        "popularity": 15.656534,
        "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
      },
      {
        "name": "Monica Bellucci",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
        "popularity": 16.096436,
        "id": "0ad5e441-3084-47a1-9e9b-b917539bba71"
      },
      {
        "name": "Gal Gadot",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
        "popularity": 10.049256,
        "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2"
      },
      {
        "name": "Ian McKellen",
        "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
        "popularity": 10.070132,
        "id": "0067ae32-97b6-4431-898e-eb1c10150abb"
      },
    ]
  }

  addRandomContact(){
    const stateCopy = {...this.state}
    const randomIndex = Math.floor(Math.random()*contacts.length)
    // console.log(contacts[randomIndex])
    stateCopy.fewContacts.push(contacts[randomIndex])
    this.setState(stateCopy)
  }

  sortByName(){
    const stateCopy = {...this.state}
    stateCopy.fewContacts.sort((a, b)=>{
      return a.name.localeCompare(b.name)
    })
    this.setState(stateCopy)
  }

  sortByPopularity(){
    const stateCopy = {...this.state}
    stateCopy.fewContacts.sort((a, b)=>{
      return b.popularity-a.popularity
    })
    this.setState(stateCopy)
  }

  deleteContact(index){
    const stateCopy = {...this.state}
    stateCopy.fewContacts.splice(index, 1)
    this.setState(stateCopy)
  }

  render(){
    const contactList = this.state.fewContacts.map((contact, index)=>{
      return(
        <tr className="table-row" key={`contact${index}`}>
          <td> <img src={contact.pictureUrl} alt={contact.name} className="contactImg"/> </td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td><button onClick={()=>this.deleteContact(index)}>Delete contact</button></td>
        </tr>
      )
    })
    return (
      <div className="App">
        <div>
          <h1 className="title">Iron contacts</h1>
          <button onClick={()=>this.sortByName()}>Sort by name</button>
          <button onClick={()=>this.sortByPopularity()}>Sort by popularity</button>
          <button onClick={()=>this.addRandomContact()}>Add random contact</button>
          <table className="contacts-table">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {contactList}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;

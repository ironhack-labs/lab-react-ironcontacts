
import { Component } from 'react';
import contacts from "./contacts.json";
import './App.css';


class App extends Component {
  state = {
    //initial state, only called once
    contacts : contacts.slice(0, 5)
  }

// Iteration 1 -------------
  //const [allContacts, setAllContacts] = useState({
  //  pictureUrl : "",
  //  name: "",
  //  popularity: 0,
  //  id: ""
//
  //})
//
  //const [allContacts, setAllContacts] = useState([
  //{
  //  "name": "Idris Elba",
  //  "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
  //  "popularity": 11.622713,
  //  "id": "11731993-0604-4bee-80d5-67ad845d0a38"
  //},
  //{
  //  "name": "Johnny Depp",
  //  "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
  //  "popularity": 15.656534,
  //  "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
  //},
  //{
  //  "name": "Monica Bellucci",
  //  "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
  //  "popularity": 16.096436,
  //  "id": "0ad5e441-3084-47a1-9e9b-b917539bba71"
  //},
  //{
  //  "name": "Gal Gadot",
  //  "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
  //  "popularity": 10.049256,
  //  "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2"
  //},
  //{
  //  "name": "Ian McKellen",
  //  "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
  //  "popularity": 10.070132,
  //  "id": "0067ae32-97b6-4431-898e-eb1c10150abb"
  //}
//

  //])

    randomContact = () => {
      let newContact = '';
      const randomiser = Math.floor(Math.random() * contacts.length -1)

      newContact = contacts[randomiser]
      this.setState(state => {
        return {
          contacts: [...state.contacts, newContact]
        }
      })
    }


    sortContactbyName = () => {
      const sortByName = this.state.contacts.sort((a,b) => {
        return a.name.localeCompare(b.name)
      })

      this.setState(state => ({ contacts : [...sortByName]
      }))
  
    }


    sortContactbyPopularity = () => {
      const sortByPopularity = this.state.contacts.sort((a,b) => {
        return (parseFloat(b.popularity) - parseFloat(a.popularity))
      })

      this.setState(state => ({ contacts: [...sortByPopularity]
      }))
    }

    deleteContact = (id) => {
      const deleteId = this.state.contacts.filter(contact => {
        return (contact.id !== id)

  })
  this.setState(state => ({ contacts: [...deleteId]
  
  }))

}

    render() {

      const renderedContacts = this.state.contacts.map((contact, index) => {
        return (

          <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt="" style={{width: `120px`}}/> </td>

                <td> {contact.name} </td>
                <td> {contact.popularity.toFixed(2)} </td>
                <td> <button onClick={() => this.deleteContact(contact.id)} className="btn btn-nameDeleter"> Delete </button></td>
               
              </tr>
            )



      })

    return (

      <div className="container-container">
        <div className="container-contacts">
        <h1>IronContacts</h1>
        <button onClick={this.randomContact} className="btn btn-random"> Add Random Contact </button>
        <button onClick={this.sortContactbyName} className="btn btn-nameSorter"> Sort by Name </button>
        <button onClick={this.sortContactbyPopularity} className="btn btn-nameSorter"> Sort by Popularity </button>
        <table className="table-header">
        <thead>
          <tr>
            <td><h2> Picture </h2></td>
            <td><h2> Name </h2></td>
            <td><h2> Popularity </h2></td>
            <td><h2> Action </h2></td>
          </tr>

        </thead>
        <tbody>
        {renderedContacts}
         
        </tbody>
        </table>
        </div>
      </div>
    );

    
        }


    
  
}

export default App;

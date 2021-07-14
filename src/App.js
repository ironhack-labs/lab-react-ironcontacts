import './App.css';
import React, {Component} from 'react';
import contactsJson from "./contacts.json";

// function App() {



//   return (
//     <div>
//       <h1>IronContacts</h1>



//     </div>
//   );
// }

class App extends Component {

  state = {
    contacts: contactsJson
  }

   AddRandom = () => {

      const { contacts } = this.state

      let randomIndex = Math.floor(Math.random() * contacts.length);
      let randomContact = contacts[randomIndex]  

      this.setState({
        contacts: [randomContact, ...contacts]
      })

  }

  SortByName = () => {

    const { contacts } = this.state
    let cloneContacts = JSON.parse(JSON.stringify( contacts ))

    cloneContacts.sort((a, b) => {
      if(a.name > b.name){
        return 1
      }else if (a.name < b.name){
        return -1
      }else{
        return 0
      }
    })

    this.setState({
      contacts: cloneContacts
    })

  }

  SortByPopularity = () => {

    const { contacts } = this.state
    let cloneContacts = JSON.parse(JSON.stringify( contacts ))

    cloneContacts.sort((a, b) => {
      if(a.popularity > b.popularity){
        return 1
      }else if (a.popularity < b.popularity){
        return -1
      }else{
        return 0
      }
    })

    this.setState({
      contacts: cloneContacts
    })
  }

  DeleteContact = (index) =>{
    const { contacts } = this.state

    let filterContact = contacts.filter((contacts , i) => {

      return i !== index;

    })

    this.setState({
      contacts: filterContact
    })

  }


  render() {


    return (
      <div>

       <h1>IronContacts</h1>

      <button onClick={ this.AddRandom }>Add random contact</button>
      <button onClick={ this.SortByName }>Sort by name</button>
      <button onClick={ this.SortByPopularity }>Add random contact</button> 

      {
        
        this.state.contacts.slice(0, 5).map((contact, index) => {

          return (
            <div>

              <ul>
                <li>
                  <img className="photos" src={ contact.pictureUrl } alt=' ' />
                  <h2>Name: {contact.name}</h2>
                  <h2>Popularity: {contact.popularity}</h2>

                  <h2>Action:</h2>
                  <button onClick={ () => { this.DeleteContact(index) }  }>Delete</button>
                </li>
              </ul>


            </div>
          )
        })
      }
       


     </div>

    )
    
  }

}

export default App;

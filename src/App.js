import './App.css';
import contactsJson from "./contacts.json";
import React, { Component } from 'react'


class App extends Component {

  state = {//esse é o jeito de criar state em class component
    contacts: contactsJson.slice(0,5)
  }

  handleAdd = () => {
    const {contacts} = this.state
    let randomIndex = Math.floor(Math.random() * contactsJson.length)
    let randomElement = contactsJson[randomIndex]

    this.setState({
      contacts: [randomElement , ...contacts] //usamos o spread operator para não modificar a array original (isso aconteceria se usássemos unshift ou push). 
  })
  }

  handleSortByName = () => {
    const {contacts} = this.state
    let cloneContacts = JSON.parse(JSON.stringify( contacts ))

    cloneContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } else if (a.name < b.name) {
        return -1
      } else {
        return 0
      }
    })

    this.setState({
      contacts: cloneContacts
    })
  }

  handleSortByPopularity = () => {
    const {contacts} = this.state
    let cloneContacts = JSON.parse(JSON.stringify( contacts ))

    cloneContacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1
      } else if (a.popularity < b.popularity) {
        return 1
      } else {
        return 0
      }
    })

    this.setState({
      contacts: cloneContacts
    })
  }

  handleDelete = (index) => {
      const {contacts} = this.state
      let filteredContacts = contacts.filter((singleContact, i) => {
          return i !== index //isso é para retornar todos os students que não tem o i = index
      })
      this.setState({
          contacts: filteredContacts
      })

  }

  render() {
      return (
          <div>
            <h1>IronContacts</h1>
            <button onClick={this.handleAdd}>Add random contact</button>
            <button onClick={this.handleSortByName}>Sort by name</button>
            <button onClick={this.handleSortByPopularity}>Sort by popularity</button>
              <table>
                <thead>
                  <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Popularity</th>
                  <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.contacts.map((singleContact, index) => {
                      return(
                      <tr key={index}>
                        <td><img src={`${singleContact.pictureUrl}`}/></td>
                        <td>{singleContact.name}</td>
                        <td>{singleContact.popularity.toFixed(2)}</td>
                        <td><button onClick={ () => { this.handleDelete(index) } }>Delete</button></td>
                      </tr>
                      )
                    })
                  }
                </tbody>
              </table>
          </div>
      )
  }
}



// function App() {

//   const [contactsArr, setContactsArr] = useState(contacts.slice(0,5))//use slice to get the first 5 elements.

//   console.log(contactsArr)// this will print the first 5 elements because this is the initial state

//   return (
//     <div>
//       <h1>IronContacts</h1>
//         <table>
//           <thead>
//            <tr>
//             <th>Picture</th>
//             <th>Name</th>
//             <th>Popularity</th>
//             </tr>
//           </thead>
//           <tbody>
//               {contactsArr.map((singleContact, index) => {
//                     return (
//                 <tr key={index}>
//                   <td><img src={`${singleContact.pictureUrl}`}/></td>
//                   <td>{singleContact.name}</td>
//                   <td>{singleContact.popularity.toFixed(2)}</td>
//                 </tr>
//           )})}
//           </tbody>
//         </table>
//     </div>
//   )

//   return (
//     <div>
//         <Contacts/>
//     </div>  
//   )

// }

export default App;

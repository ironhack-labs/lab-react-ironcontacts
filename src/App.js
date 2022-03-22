import contactsJson from './contacts.json'
import "./App.css";
import { Component } from 'react';

class App extends Component {

  state = {
    allContacts: contactsJson.slice(5, contactsJson.length),
    contacts: contactsJson.slice(0,5),
    shortContacts: ''
  }

  getRamdonContact = () => {
    const { allContacts, contacts } = this.state

    const newContact = allContacts[Math.floor(Math.random() * allContacts.length)]
    contacts.push(newContact)

    this.setState({
      allContacts: allContacts.filter(contact => contact.id !== newContact.id),
      contacts: contacts
    })
  }

  handSorty = (event) => {
    const { contacts } = this.state
    const shortByAttr = event.target.name

    let shortElemns;
    if(shortByAttr === 'name') {
      shortElemns = contacts.sort(function(a, b){
        if(a[shortByAttr] < b[shortByAttr]) { return -1 }
        if(a[shortByAttr] > b[shortByAttr]) { return 1 }
        return 0;
      })
    } else {
      shortElemns = contacts.sort((a, b) => b[shortByAttr] - a[shortByAttr]);
    }

    if(!shortElemns) shortElemns = contacts

    this.setState({
      contacts: shortElemns
    })
  }

  
  render() {
    return (
      <div className="App container">
        <h1 className='m-4'>ironcontacts</h1>
        <button className="btn btn-primary m-4" onClick={this.getRamdonContact}>Add Ramdon Contact</button>
        <button className="btn btn-success m-4" name='popularity' onClick={this.handSorty}>Sort By Popularity</button>
        <button className="btn btn-success m-4" name='name' onClick={this.handSorty}>Sort By Name</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Won Oscar</th>
              <th scope="col">Won Emmy</th>
            </tr>
          </thead>
          {
            this.state.contacts.map( (person, indice) => {
            const { id, name, pictureUrl, popularity, wonEmmy, wonOscar } = person
              return (
                <tbody key={id}>
                  <tr>
                    <td className='ironcontacts-img' style={{backgroundImage: `url(${pictureUrl})`}}></td>
                    <td>{name}</td>
                    <td>{popularity && popularity.toFixed(2)}</td>
                    <td>{wonOscar ? (
                          <span className='iconWin'></span>
                        ) : (
                          <span className='iconLose'></span>
                        )
                      }</td>
                      <td>{wonEmmy ? (
                          <span className='iconWin'></span>
                        ) : (
                          <span className='iconLose'></span>
                        )
                      }</td>
                  </tr>
                </tbody>
              )
            })
          }
        </table>
      </div>
    )
  }
}
export default App;
import './App.css';
import contacts from "./contacts.json";
import { Component } from "react";




class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
    sort: ''
  }



  addRandomContact = () => {
    const addContact = contacts.slice(5, (contacts.length + 1))
    const randomCharacter = addContact[Math.floor(Math.random() * addContact.length)]

    this.setState({
      contacts: [...this.state.contacts, randomCharacter]
    })
  }

  handleSortBy = (event) => {
    const { name } = event.target

    this.setState(prevState => {
      return {
        sort: prevState.sort === name ? '' : name
      }
    })
  }

  sortList = () => {

    const { contacts, sort } = this.state


    if (sort === 'name') {
      return contacts.sort((a, b) => {
        if (a.name < b.name) return -1
        if (b.name < a.name) return 1
        return 0
      })
    }

    if (sort === 'popularity') {
      return contacts.sort((a, b) => {
        if (a.popularity < b.popularity) return 1
        if (b.popularity < a.popularity) return -1
        return 0
      })
    }
  }

  deleteContact = (id) => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter(contact => contact.id !== id)
    })
  }
  
    




  render() {

    const { contacts } = this.state
    this.sortList()

    return (
      <div className="App " >
        <h1>IronContacts</h1>
        <div className='d-flex col justify-content-center align-items-center'>
          <div className='row mb-3 mt-4 justify-content-center'>
            <div className='col'>
              <button
                className='btn btn-dark'
                onClick={this.addRandomContact}
              > Add Random Character
              </button>
            </div>
            <div className='col'>
              <button
                name="popularity"
                className='btn btn-secondary'
                onClick={this.handleSortBy}
              > Sort by Popularity
              </button>
            </div>
            <div className='col'>
              <button
                name="name"
                className='btn btn-info'
                onClick={this.handleSortBy}
              > Sort by Name
              </button>
            </div>
            <div className="row my-2 mx-2 " >
              <div className='d-flex justify-content-center'>
                <ul>
                  <table className="table" style={{width:1200}}>
                    <thead>
                      <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">Popularity</th>
                        <th scope="col">Won Oscar</th>
                        <th scope="col">Won Emmy</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map(({id, name, pictureUrl, popularity, wonEmmy, wonOscar }) => {
                       return <tr key={id}>
                          <th scope="row">
                            <img style={{ height: 150 }} src={pictureUrl}></img>
                          </th>
                          <td>{name}</td>
                          <td>{popularity.toFixed(2)}</td>
                          <td>{wonOscar && '🏆'}</td>
                          <td> {wonEmmy && '🏆'}</td>
                          <td><button onClick={() => this.deleteContact(id)} className='btn btn-danger'> Delete  </button> </td>
                        </tr>
                      })}
                    </tbody>
                  </table>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

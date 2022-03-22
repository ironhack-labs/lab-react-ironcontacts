import { Component } from 'react';
import './App.scss';
import contacts from './contacts.json'; // Total: 52

class App extends Component {
  state =  {
    contacts: [...contacts].splice(0, 5), // first 5
    remainingContacts: [...contacts].splice(5, contacts.length), // other 47
    sort: ''
  }

  randomContact = () => {
    const { contacts, remainingContacts } = this.state;
    const randomIndex = Math.floor(Math.random() * (remainingContacts.length - contacts.length + 1) + contacts.length);

    this.setState({
        contacts: this.state.contacts.concat(remainingContacts[randomIndex])
    })
  }

  handleSortBy = (event) => {
    const { name } = event.target;
    console.log(`the name of envent.targer is ${name}`)

    this.setState(prevState => {
      return {
        sort: prevState.sort === name ? '' : name
      }
    })
  }

  sortContacts = () => {
    const { contacts, sort } = this.state;

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
    console.log(contacts)
  }


  render() {
    const { contacts } = this.state;
    this.sortContacts();

    return (
      <div className="wrapper">
  
        <h1 className="title">IronContacts</h1>

        <div className="btns">
          <button className="btns__single" onClick={this.randomContact}>Add Random Contact</button>        
          <button className="btns__single" name="name" onClick={this.handleSortBy}>Sort by name</button>
          <button className="btns__single" name="popularity" onClick={this.handleSortBy}>Sort by popularity</button>
        </div>
        
  
        <div>
          <table className="table">
            <thead>
              <tr>
                  <th className="table__title">Picture</th>
                  <th className="table__title">Name</th>
                  <th className="table__title">Popularity</th>
                  <th className="table__title">Won an Oscar</th>
                  <th className="table__title">Won an Emmy</th>
                  <th className="table__title">Delete</th>
                </tr>
            </thead>
            <tbody>
              {contacts.map(({ pictureUrl, name, popularity, wonOscar, wonEmmy, id }) => {
                return <tr className="table__tr" key={id} >
                  <td className="table__info table__info--img" style={{backgroundImage: `url('${pictureUrl}')`}}></td>
                  <td className="table__info">{name}</td>
                  <td className="table__info">{popularity.toFixed(2)}</td>
                  <td className="table__info">{wonOscar ? '🏆' : ''}</td>
                  <td className="table__info">{wonEmmy ? '⭐️' : ''}</td>
                  <td className="table__info"><button className='table__btn' onClick={() => this.deleteContact(id)}>Delete</button></td>
                </tr>
              })}
            </tbody> 
          </table>
        </div>
  
      </div>
    );
  }
}

export default App;

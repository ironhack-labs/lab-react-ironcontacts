import React, {Component} from 'react';
import contacts from './contacts.json';
import './App.css';



class App extends Component {

    state = {
      firstContacts: [...contacts].splice(0,5),
      otherContacts: [...contacts].splice(5, contacts.length),
      sort: " "
    }

    addRandom = () => {
      const {firstContacts, otherContacts} = this.state;

      let contactRandom = otherContacts[Math.floor(Math.random()*otherContacts.length)]
      console.log(contactRandom)

      this.setState({
        firstContacts: [contactRandom, ...firstContacts]
      })
      console.log(firstContacts)
    }

    handleSortBy = (event) => {
      const { name } = event.target
  
      this.setState(prevState => {
        return {
          sort: prevState.sort === name ? '' : name
        }
      })
    }

    sortContacts = () => {
      const { firstContacts, sort } = this.state

      if (sort === 'name') {
        return firstContacts.sort((a, b) => {
          if (a.name < b.name) return 1
          if (b.name < a.name) return -1
          return 0
        })
      }
  
      if (sort === 'popularity') {
        return firstContacts.sort((a, b) => {
          if (a.popularity < b.popularity) return 1
          if (b.popularity < a.popularity) return -1
          return 0
        })
      }
    }

    deleteContacts = (id) => {
      const {firstContacts } = this.state

      this.setState({ firstContacts: firstContacts.filter(contact => contact.id !== id) })
    }

  render(){
    const { firstContacts } = this.state;
    this.sortContacts()
    
    return (
      <div className="App">
    <h3>IronContacts</h3>
      <div className="buttons">
        <button
          onClick={this.addRandom}>
        Add Random Contact
        </button>
        <button
          onClick={this.handleSortBy}
          name="name">
        Sort by name
        </button>
        <button
          onClick={this.handleSortBy}
          name="popularity">
        Sort by popularity
        </button>
      </div>
    
    <table className="table size-tb">
    <thead>
    <tr className='me-3'>
    <th scope="col">Picture</th>
    <th scope="col">Name</th>
    <th scope="col">Popularity</th>
    <th scope="col">Won an Oscar</th>
    <th scope="col">Won an Emmy</th>
    <th scope="col"></th>
    </tr>
    </thead>
      { this.state.firstContacts.map(({ pictureUrl, name, popularity, wonOscar, wonEmmy, id }) => {
          return (
            <tbody>
              <tr>
                <td>
                <img 
                  key={id}
                  value={pictureUrl}
                  className='contact-img'
                  src={pictureUrl}
                  alt=""
                />
                </td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>

                <td>
                {wonOscar && "🏆"}
                </td>
                <td>
                {wonEmmy && "🏆"}
                </td>
                <td className="delete-btn">
                  <button
                  className="btn btn-danger"
                  key={id}
                  onClick={() => this.deleteContacts(id)}>
                  Delete</button>
                </td>
              </tr>
              </tbody>
          )
        })
      }
   </table>
    </div>
    );
  }
}


export default App;

import React, { Component } from 'react'
import './App.css';
import data from './contacts.json';


class App extends Component {

  state = {
    contacts : data.slice(0, 6),
    sort: ''
  };

  // ADD RANDOM CONTACT 
  randomContact = () => {
    const {contacts} = this.state
    const restArr  = data.filter(item => !contacts.includes(item))
    const randomUnit = restArr[Math.floor(Math.random()*restArr.length)];
    return randomUnit ?  this.setState({contacts: contacts.concat(randomUnit)}) : null
  }

  // DELETE CONTACT
  delete = (id) => {
    console.log(id)
    this.setState({contacts : this.state.contacts.filter(el => el.id !== id)})
  }

  
  handleSortBy = (event) => {
    const tipoDeSort = event.target.name
    console.log(tipoDeSort)
    
    this.setState(prevState => {
      return {
        sort: prevState.sort === tipoDeSort ? '' : tipoDeSort
      }
    })
  }

  sortContacts = () => {
    const { sort , contacts} = this.state
    console.log("dentro sortContacts",sort)
    if (!sort) {
      return contacts
    }

    if (sort === 'name') {
      return contacts.sort((a, b) =>  a.name.localeCompare(b.name))
    }

    if (sort === 'popularity') {
      return contacts.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1)
    }
  }
  

  render() {

    const contacts = this.sortContacts();

    return (
      <div className="App container d-flex flex-column align-items-center ">
        <h1>IronContacts</h1>

        {/* BUTTONS */}
        <div>
          <button className='btn btn-primary m-3'  onClick={this.randomContact} 
          >Add random contact
          </button>

          <button name='name' className='btn btn-primary m-3' onClick={this.handleSortBy} 
          >Sort by Name
          </button>

          <button name='popularity' className='btn btn-primary m-3' onClick={this.handleSortBy} 
          >Sort by Popularity
          </button>

          <button name='prueba' className='btn btn-primary m-3' onClick={this.handleSortBy} 
          >prueba
          </button>
        </div>
      

        {/* TABLE */}
        <table style={{width:"800px"}}>
        <thead>
          <tr>
            <th><h3>Picture</h3></th> 
            <th><h3>Name</h3></th>
            <th><h3>Popularity</h3></th>
            <th><h3>Won Oscar</h3></th>
            <th><h3>Won Emmy</h3></th>
            <th><h3>Actions</h3></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map( ({name,id,popularity,pictureUrl,wonOscar,wonEmmy},index) => {
            return  <tr key = {id}>
              <td><img src={pictureUrl} alt="" style={{height:"100px"}}  /> </td> 
              <td>{name}</td>
              <td>{popularity}</td>
              <td>{wonOscar && <h2>🏆 </h2>}</td>
              <td>{wonEmmy  && <h2>🏆 </h2>}</td>
              <td><button className='btn btn-warning' onClick={() => this.delete(id)}>Delete</button></td>
            </tr>
          } )}
        </tbody>
        </table>
      </div>
    );
  }
}

export default App;

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
    const restArr  = data.slice(6)
    const randomUnit = restArr[Math.floor(Math.random()*restArr.length)];

    this.setState({contacts : this.state.contacts.concat(randomUnit)})
  }



  
  handleSortBy = (event) => {
    const tipoDeSort = event.target.name

    this.setState(xxx => {
      return {
        sort: xxx.sort === tipoDeSort ? '' : tipoDeSort
      }
    })
  }

  sortContacts = () => {
    const { sort , contacts} = this.state

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
        </div>
      

        <table style={{width:"800px"}}>
        <thead>
          <tr>
            <th><h3>Picture</h3></th> 
            <th><h3>Name</h3></th>
            <th><h3>Popularity</h3></th>
            <th><h3>Won Oscar</h3></th>
            <th><h3>Won Emmy</h3></th>
          </tr>
        </thead>
        <tbody>
          {contacts.map( ({name,id,popularity,pictureUrl,wonOscar,wonEmmy},index) => {
            return  <tr key = {id}>
              <th><img src={pictureUrl} alt="" style={{height:"100px"}}  /> </th> 
              <th>{name}</th>
              <th>{popularity}</th>
              {wonOscar && <th><h2>🏆</h2> </th> }
              {wonEmmy && <th><h2>🏆</h2> </th> }
            </tr>
          } )}
        </tbody>

        

        </table>
      </div>
    );
}
  
}

export default App;

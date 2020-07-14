import React, { Component } from 'react';
import contacts from '../contacts.json';

 class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
        myContacts: contacts.slice(0, 5)             
    }
  }

  // Añade un contacto Random a la lista 

random = () => { 

const arr = [...this.state.myContacts]

const randomContact = contacts[Math.floor(Math.random() * contacts.length)]

arr.push(randomContact)

this.setState({myContacts: arr})

}


// Ordena de orden alfabético 

  sortByName = () => {
  
      let arr = [...this.state.myContacts]

      arr.sort((a, b) => {

      return a.name.localeCompare(b.name)

    })
 
      this.setState({myContacts: arr})
  }

// Ordena por popularidad en orden descendente

sortByPopularity = () => {

const arr = [...this.state.myContacts]

arr.sort((a,b) => {

return  b.popularity - a.popularity

})

this.setState({myContacts: arr})

}

// Se tiene que usar filter y hay que guardar el resultado del filtro en una variable, sino no funca.

deleteById = id => {

const arr = [...this.state.myContacts]

const arrFiltered = arr.filter(elm => elm.id !== id)

this.setState({myContacts: arrFiltered})

}


  render() {

    const myContacts = this.state.myContacts.map((person) => (
      <tr key={person.id}>
        <td>
          <img style={{width: 100}} src={person.pictureUrl} alt="Person"></img>
        </td>
        <td>{person.name}</td>
        <td>{person.popularity}</td>
        <td>
          <button onClick={() => this.deleteById(person.id)}>Delete</button>
        </td>
      </tr>
    ));

    return (
      <div>
      <h1>IronContacts</h1>
      <button  onClick={this.random}>Add contact</button>
      <button  onClick={this.sortByName}>Sort by Name</button>
      <button  onClick={this.sortByPopularity}>Sort by Popularity</button>
      <table align="center">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{myContacts}</tbody>
      </table>
      </div>
    );
  }
}

export default Contacts
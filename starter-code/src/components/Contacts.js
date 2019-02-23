import React, { Component} from "react";
import contacts from '../contacts.json';

class Contacts extends Component{
  constructor(){
    super()
    this.state = {
      contactos: contacts,
      primerosCinco: contacts.slice(0, 5)
    }
  }

addRandom() {
  let randomWey = this.state.contactos[Math.floor(Math.random()*this.state.contactos.length)]

  let copia = this.state.primerosCinco
  copia.push(randomWey)

  this.setState({
    primerosCinco: copia
  })
}

sortByName() {
  let sorted = this.state.primerosCinco.sort((a, b) => a.name.localeCompare(b.name))

  this.setState({
    primerosCinco: sorted
  })

}

sortByPopularity() {
  let sortedPopularity = this.state.primerosCinco.sort((a, b) => a.popularity - b.popularity)

  this.setState({
    primerosCinco: sortedPopularity
  })
}

deleteVato(index) {
  let copia = this.state.primerosCinco
  copia.splice(index, 1)

  this.setState({
    primerosCinco: copia
  })
}


  render(){
    return(
      <div className="cabrones-table">
        <button onClick={() => this.addRandom()} className="btn">Añade un vato</button>
        <button onClick={( ) => this.sortByName()} className="btn">Sort By name</button>
        <button onClick={() => this.sortByPopularity()} className="btn">Sort By Popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {
            this.state.primerosCinco.map((cabron, index) => 
            <tr> 
                <td><img src={cabron.pictureUrl} alt=""/></td>
                <td>{cabron.name}</td>
                <td>{cabron.popularity}</td>
                <td><button onClick={() => this.deleteVato(index)} className="delete">Delete</button></td>
            </tr>)
          }
        </table>
      </div>
    )
  }
}

export default Contacts


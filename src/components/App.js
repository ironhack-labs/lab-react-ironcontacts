
import { Component } from 'react'
import contacts from "../contacts.json"
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      actors: contacts.slice(0, 5)
    }
  }
  

  addRandomActor() {
    const randomActor = contacts[Math.floor(Math.random() * contacts.length)]
    const copy = [...this.state.actors]
    copy.unshift(randomActor)

    this.setState({
      actors: copy
    })
  }


   deleteActor(actorId) {
      this.setState({
        actors: this.state.actors.filter(elm => elm.id !== actorId)
      })
   }
  
  
  // Ordered by name with copy

  sortedActorsbyName() {
    const copy = [...this.state.actors]
    copy.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    
    this.setState({
      actors: copy
    })
  }


// Ordered by Popularity without copy
  
  sortedActorsbyPopu() {
    this.state.actors.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    
    this.setState({
      actors: this.state.actors
    })
  }


  render() {

    const listActors = this.state.actors.map((elm) => {
      return (
        <tbody className='actorList' key= {elm.id}>
            <tr>
              <td>
              <img width="100" src={elm.pictureUrl} alt="{elm.name}" />
               </td>
              <td><strong>{elm.name}</strong></td>
              <td>{elm.popularity.toFixed(2)}</td>
              <td><button onClick={() => this.deleteActor(elm.id)}>Eliminar Actor</button></td>
          </tr>
        </tbody>
      )
    })

    return (
      <div className= 'container'>
        <h1>IRON CONTACTS</h1>
        <section className='buttonsSection'>
        <button onClick={() => this.addRandomActor()}>Añadir actor aleatorio</button>
        <button onClick={() => this.sortedActorsbyName()}>Ordenar Alfabéticamente</button>
        <button onClick={() => this.sortedActorsbyPopu()}>Ordenar según Popularidad</button>
        </section>
          <table>
          <thead>
            <tr>
              <th>IMAGEN</th>
              <th>NOMBRE</th>
              <th>POPULARIDAD</th>
            </tr>
          </thead>
          {listActors}
        </table>
        <hr></hr>
    </div>
  )
  }
  }


  export default App;
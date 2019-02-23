import React, {Component} from 'react';
import contacts from '../contacts.json';
import Card from './Card'

class Contactos extends Component {
  state = {
    contactos: [
    {
      "name": "Idris Elba",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
      "popularity": 11.622713
    },
    {
      "name": "Jessica Chastain",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
      "popularity": 8.324357
    },
    {
      "name": "Johnny Depp",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
      "popularity": 15.656534
    },
    {
      "name": "Emilia Clarke",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
      "popularity": 16.211837
    },
    {
      "name": "Leonardo DiCaprio",
      "pictureUrl": "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
      "popularity": 11.245333
    }
  ]
}

  addContact = () => {
    const list = this.state.contactos
    const indice = Math.floor((Math.random() * contacts.length) + 1)
    const nuevo = contacts[indice]
    list.push(nuevo);
    this.setState({
      list
    });
  };

  sortName = () => {
    const list = this.state.contactos
    list.sort()
    this.setState({
      list
    });
  };

  sortPopularity = () => {
    const list = this.state.contactos
    list.sort((a, b)=>{
      if (a>b) {
        return -1
      }
    })
    this.setState({
      contactos: list
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addContact}>Random contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        {
          this.state.contactos.map((contacto, index) => {
            return <Card key={index} {...contacto} />
          })
        }
      </div>
    )
  }
}

export default Contactos

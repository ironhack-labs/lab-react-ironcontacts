import React, { Component, Fragment } from 'react';
import Contact from './Contact';
import contacts from '../contacts.json'

class ListContacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: contacts.slice(0, 5)
     }
     this.newList = []
  }

  addHandler() {
    const newCelebs = [...this.state.contacts]
    let celebs = contacts.filter((celeb) => {
      if (newCelebs.indexOf(celeb) < 0) {
        return celeb;
      }
    })
    console.log(celebs)
    newCelebs.push(celebs[Math.floor(Math.random() * celebs.length)]);
    this.setState({
      contacts: newCelebs
    })
  }

  sortNameHandler() {
    const newCelebs = [...this.state.contacts]
    newCelebs.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
      contacts: newCelebs
    })
  }

  sortPopularityHandler() {
    const newCelebs = [...this.state.contacts]
    newCelebs.sort((a, b) => b.popularity - a.popularity)
    this.setState({
      contacts: newCelebs
    })
  }

  deleteHandler(celebIndex) {
    let newCelebs = [...this.state.contacts];
    newCelebs.splice(celebIndex, 1);
    this.setState({
      contacts: newCelebs
    });
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.addHandler.bind(this)} >Add Random Celebrity</button>
        <button onClick={this.sortNameHandler.bind(this)}>Sort By Name</button>
        <button onClick={this.sortPopularityHandler.bind(this)}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.contacts.map((celebrity, index) => {
                return <Contact key={index} deleteHandler={this.deleteHandler.bind(this, index)} {...celebrity} />
              })
            }
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default ListContacts;
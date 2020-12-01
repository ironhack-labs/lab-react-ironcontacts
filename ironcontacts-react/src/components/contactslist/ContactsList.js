import React, {Component} from 'react'
import contacts from '../contacts.json'
import { TableHead, TableRow } from '../table/Table'
import './ContactList.css'

class ContactsList extends Component {
  constructor() {
    super()
    this.state = {
      movies: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
    }
  }
    
    addRandomContact = () => {
        const newMoviesArr = [...this.state.movies]
        const idx = Math.floor(Math.random() * (contacts.length - this.state.movies.length) + this.state.movies.length);
        newMoviesArr.push(contacts[idx])
        this.setState({ movies: newMoviesArr })
    }

    sortName = () => {
        const sortedArr = this.state.movies.sort((a, b) => (a.name > b.name) ? 1 : -1)
        this.setState({ movies: sortedArr })
    }
    
    sortPopularity = () => {
        const sortedArr = this.state.movies.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
        this.setState({ movies: sortedArr })
    }

    deleteContact = elmId => this.setState({movies: this.state.movies.filter(elm => elm.id != elmId)})
    
  render() {
    return (
        <section>
            <div className="buttons">
                <button onClick={this.addRandomContact}>Add new random contacts</button>
                <button onClick={this.sortName}>Sort by name</button>
                <button onClick={this.sortPopularity}>Sort by popularity</button>
            </div>
            <table>
                <TableHead head1="Picture" head2="Name" head3="Popularity" head4="Action" />
                <tbody>
                    {this.state.movies.map(elm => <TableRow key={elm.id} deleteContact={() => this.deleteContact(elm.id)} {...elm} />)}
                </tbody>
            </table>
        </section>
    )
  }
}

export default ContactsList
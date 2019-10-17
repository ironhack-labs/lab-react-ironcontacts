import React, { Component } from 'react';
import css from './Contact.css';
import contacts from './contacts.json';

class Contact extends Component {
    state = {
        actors: contacts,
        filterActors: contacts.slice(0, 5)
    }

    addRandom = (() => {
        let randomIndex = Math.floor(Math.random() * this.state.actors.length);
        let randomActor = this.state.actors[randomIndex];
        let filterActors = this.state.filterActors;
        if (filterActors.indexOf(randomActor) === -1) {
            filterActors.push(randomActor);
            this.setState({ filterActors: filterActors })
        } else {
            this.addRandom();
        }
    })

    sortByName = (() => {
        this.state.filterActors.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0
            }
        })
        this.setState({
            filterActors: this.state.filterActors
        })
    })

    deleteItem = ((index) => {
        this.state.filterActors.splice(index, 1);
        this.setState({
            filterActors: this.state.filterActors
        })
    })

    sortByPpopularity = (() => {
        this.state.filterActors.sort((a, b) => {
            if (a.popularity > b.popularity) {
                return -1;
            } else if (a.popularity < b.popularity) {
                return 1;
            } else {
                return 0
            }
        })
        this.setState({
            filterActors: this.state.filterActors
        })
    })

    handleSearch = (e) => {
        var searchQuery = e.target.value

        var searchResult = this.state.actors.filter((actor) =>
            actor.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
        )

        this.setState({ filterActors: searchResult.slice(0, 5) })
    }
    render() {

        return (
            <div className='posiitionTable'>
                <div><input onChange={this.handleSearch} type="text" /></div>
                <div>
                    <button onClick={this.addRandom}>Add random contact</button>
                    <button onClick={this.sortByName}>sort By Name</button>
                    <button onClick={this.sortByPpopularity}>sort By Ppopularity</button>
                </div>
                <table>


                    <caption>IronContacts</caption>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>popularity</th>
                    </tr>

                    {this.state.filterActors.map((filterActors, i) => (
                        <tr>
                            <td><img src={filterActors.pictureUrl} className='pictures' alt='portret'></img></td>
                            <td>{filterActors.name}</td>
                            <td>{filterActors.popularity}</td>
                            <button onClick={() => { this.deleteItem(i) }}>Delete</button>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}





export default Contact;
import React, { Component } from 'react'
import ironContacts from '../../data/contacts.json'

class SortList extends Component {
    state = {
        contacts: ironContacts,
        sort: ''
    }
    //Sort by Name:
    sortByName = () => {
        const { sort } = this.state
        if (sort === 'name') {
            return this.state.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            })
        }
    }
    sortByPopularity = () => {
        const { sort } = this.state
        if (sort === 'popularity') {
            return this.state.sort((a, b) => {
                if (a.popularity < b.popularity) return -1;
                if (a.popularity > b.popularity) return 1;
                return 0;
            })
        }

    }
    render() {
        return (
            <div className='d-flex'>
                <button name='name' className='btn btn-light border-dark' onClick={this.sortByName}>Sort by Name </button>
                <button name='popularity' className='btn btn-light border-dark' onClick={this.sortByPopularity}>Sort by Popularity </button>
            </div>
        )
    }
}

export default SortList

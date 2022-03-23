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
    
    render() {
        return (
            <div className='d-flex'>
                
            </div>
        )
    }
}

export default SortList

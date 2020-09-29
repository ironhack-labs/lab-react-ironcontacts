import React,{ Component } from 'react'
import allContacts from '../../components/contacts'
import Card from '../cards/Card'


class List extends Component  {

    constructor() {
        super()
        this.state = {
            contacts: allContacts.slice(0, 2)
        }
    }

    addRandom = () => {
        const random = Math.floor(Math.random() * allContacts.length)
        this.setState({
            contacts: [...this.state.contacts, allContacts[random]]
        })
    }

    sortbyPopularity = () => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => a.popularity - b.popularity).reverse()
        })
    }

    sortbyName = () => {
        this.setState({
            contacts: this.state.contacts.sort((a, b) => {
                if (a.name < b.name) { return -1; }
                if (a.name > b.name) { return 1; }
                return 0;
            })
        })
    }

    delete = (contactId) => {
        this.setState({
            contacts: this.state.contacts.filter(elm => elm.id !== contactId)
        })
    }
    

    render() {
        
        
        const list = this.state.contacts

        return (
            <>
                <button onClick={this.addRandom}>Add Random Contact</button>
                <button onClick={this.sortbyName}>Sort by Name</button>
                <button onClick={this.sortbyPopularity}>Sort by Popularity</button>


                <table>
                    <thead>
                        <th><h1>Picture</h1></th>
                        <th><h1>Name</h1></th>
                        <th><h1>Popularity</h1></th>
                        <th><h1>Action</h1></th>
                    </thead>
                    <tbody>
                        {list.map(elm => <Card key={elm.id} {...elm} remove={() => this.delete(elm.id)}/>)}
                    </tbody>

                </table>
          
            </>
        )
    }
}



export default List

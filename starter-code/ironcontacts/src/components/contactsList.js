import React, {Component} from 'react'
import contacts from '../contacts.json'
import Button from './button'
import ContactCard from './contactCard'

class List extends Component {
    constructor() {
        super()
        this.state = {
            sName: true,
            sPop: true,
            contacts: contacts,
            contactsSpl: contacts.slice(0,5)

        }
    }

    deleteContact = id => {
        const contactsSplDel = [...this.state.contactsSpl]
        contactsSplDel.splice(id, 1)
        this.setState({ contactsSpl: contactsSplDel })
    }

 

    addContact = () => {
 

        const addContact = [...this.state.contactsSpl]
        const rndNumber = Math.floor(Math.random()*(contacts.length-5)+5)
        console.log(rndNumber)

        addContact.push(contacts[rndNumber])
        this.setState({contactsSpl: addContact})
    }

    sortPopularity = () => {
        const sortPopularity = [...this.state.contactsSpl]
        sortPopularity.sort(
            this.state.sPop ? (a, b) => (b.popularity - a.popularity): (a, b) => (a.popularity - b.popularity)
        )

        console.log(sortPopularity)
        this.setState({contactsSpl: sortPopularity, sPop: !this.state.sPop})
    }

    sortName = () => {
        const sortName = [...this.state.contactsSpl]
        
        sortName.sort(
           this.state.sName ? (a, b) => (a.name.localeCompare(b.name)) : (a, b) => (b.name.localeCompare(a.name))
        )

        console.log(sortName)
        this.setState({contactsSpl: sortName, sName: !this.state.sName})

        
    }



    render() {

        // const filteredMovies = this.state.movies.filter(elm => elm.oscar === this.state.showOscar)

        return (
        <>
            <div className='row'>
                <Button click={() => this.addContact()} text='Add random contact' />
                <Button click={() => this.sortName()} text='Sort by name' />
                <Button click={() => this.sortPopularity()} text='Sort by popularity' />
            </div>
        <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                </tr>
            </thead>
                <tbody>
                {this.state.contactsSpl.map((contact, idx) => <ContactCard key={idx} {...contact} delete= {()=> this.deleteContact(idx)}  />)}

                </tbody>
                
        </table>
        </>
        )
    }
}


export default List
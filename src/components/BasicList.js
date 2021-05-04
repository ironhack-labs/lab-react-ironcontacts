import './BasicList.css'
import { Component } from 'react'

// Nominal import
import contactsFromAPI  from './../contacts.json'
import CelebrityInfo from './CelebrityInfo'

function getRandomContact(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
function isSameContact(contact1, contact2) {
    return contact1.id === contact2.id
}
class BasicList extends Component {

    constructor() {
        super()
        this.state = {
            contacts: contactsFromAPI.slice(0,5),
        }
    }

    addRandom(){
        let newContact = getRandomContact(contactsFromAPI)
        const newContactsArray = [...this.state.contacts]
        //arr.every
        if(!this.state.contacts.some((elm)=> isSameContact(elm, newContact))) {
            newContactsArray.push(newContact)
        }  else {
            return this.addRandom()
        }

        this.setState({ 
            contacts: newContactsArray
        })
    }

    sortByName(){
        const newContactsArray = [...this.state.contacts]
        const sortedArray = newContactsArray.sort((a, b) => a.name.localeCompare(b.name))
        console.log(sortedArray)
        this.setState({
            contacts: sortedArray
        })
    }

    sortByPopularity(){
        const newContactsArray = [...this.state.contacts]
        const sortedArray = newContactsArray.sort((a, b) => a.popularity - b.popularity)
        console.log(sortedArray)
        this.setState({
            contacts: sortedArray
        })
    }

    deleteContact(contactId) {
        this.setState({
            contacts: this.state.contacts.filter(elm => elm.id !== contactId)
        })
    }

    render() {

       console.log(this.state.contacts)

        return (

            <section>
                <article className="btn-section">
                <button onClick={() => this.addRandom()} className="btn">
                    Add Random Contact
                </button>
                <button onClick={() => this.sortByPopularity()} className="btn">
                    Sort By Popularity
                </button>
                <button onClick={() => this.sortByName()} className="btn">
                    Sort By Name
                </button>
                </article>
                <table className="table">
                    <thead>
                        <tr className="headings">
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Popularity</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contacts.map(elm => <CelebrityInfo key={elm.id} name={elm.name} image={elm.pictureUrl} popularity={elm.popularity} deleteContact={() => this.deleteContact(elm.id)}/>)
                        }
                    </tbody>
                </table>

            </section>

        )
    }
}

export default BasicList
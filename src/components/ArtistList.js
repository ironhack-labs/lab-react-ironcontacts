import { Component } from 'react'
import contacts from './../contacts.json';
import ArtistCard from './ArtistCard'

class ArtistList extends Component {

    constructor() {
        super()
        this.state = {
            artists: contacts,
            filteredArray: contacts.slice(0, 5)
        }
    }

    pushNewArtist() {
        const artistArray = contacts
        const randomArtist = artistArray[Math.floor(Math.random() * artistArray.length + 5)]
        const newContactsArray = this.state.filteredArray
        newContactsArray.push(randomArtist)
        this.setState({
            filteredArray: newContactsArray
        })
        console.log('----', newContactsArray);
    }

    deleteContact(id) {
        this.setState({
            filteredArray: this.state.filteredArray.filter(elm => elm.id !== id)
        })
    }



    render() {

        return (
            <section>
                <h1>IronContacts</h1>
                <h2>Picture Name Popularity</h2>
                <button onClick={() => this.pushNewArtist()}>Add Random</button>
                {
                    this.state.filteredArray.map(elm => <ArtistCard key={elm.id} name={elm.name} pictureUrl={elm.pictureUrl} popularity={elm.popularity} deleteSelectedContact={() => this.deleteContact(elm.id)} />)
                }


            </section>
        )
    }
}

export default ArtistList

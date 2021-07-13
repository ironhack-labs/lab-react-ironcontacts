import { Component } from "react"
import ArtistCard from "./ArtistCard"
import contacts from "./contacts.json"


class ArtistList extends Component {

    constructor() {
        super()
        this.state = {
            contacts,
            artist: contacts.slice(0, 5)

        }
    }


    AddRandomArtist = () => {

        const numRandom = Math.floor(Math.random() * ((this.state.contacts.length + 1) - 0 + 0))

        const artistCopy = [...this.state.artist]

        artistCopy.push(contacts[numRandom])

        this.setState({
            artist: artistCopy
        })
    }
    SortByName = () => {
        const artistCopy = [...this.state.artist]

        artistCopy.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

        this.setState({
            artist: artistCopy
        })
    }
    SortByPopularity = () => {
        const artistCopy = [...this.state.artist]

        artistCopy.sort((a, b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0))

        this.setState({
            artist: artistCopy
        })
    }
    removeArtist = artistId => {

        this.setState({
            artist: this.state.artist.filter(elm => elm.id !== artistId)
        })
    }


    render() {




        return (
            <>
                <button onClick={() => this.AddRandomArtist()}>Add Random Contact</button>
                <button onClick={() => this.SortByName()}>Sort by Name</button>
                <button onClick={() => this.SortByPopularity()}>Sort By Popularity</button>
                <table>

                    <thead>


                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    {
                        this.state.artist.map(elm => <ArtistCard key={elm.id} {...elm} removeArtist={() => this.removeArtist(elm.id)} />)
                    }



                </table>

            </>
        )
    }
}

export default ArtistList
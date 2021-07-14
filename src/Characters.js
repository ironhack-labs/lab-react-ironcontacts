import { Component } from "react";
import CharacterCard from "./CharacterCard";
import contacts from './contacts.json'

class Characters extends Component {
    constructor() {
        super()
        this.state = {
            contacts: contacts.slice(0, 6) ///
        }
    }
    // randomCharacter = () => alert('soyyooyoyoy')

    render() {
        return (

            this.state.contacts.map(elm => <CharacterCard key={elm.id} characterName={elm.name} characterPopularity={elm.popularity} characterImage={elm.pictureUrl} /*randomCharacter={this.randomCharacter}*/ />)

        )
    }
}

export default Characters
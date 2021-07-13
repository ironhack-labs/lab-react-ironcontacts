import { Component } from "react"
import contacts from "./contacts.json";
import Contact from "./Contact";

class Contacts extends Component {
    constructor() {
        super()
        this.state = {
            contacts: [
                {
                    name: "Idris Elba",
                    pictureUrl: "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
                    popularity: 11.622713,

                },
                {
                    name: "Johnny Depp",
                    pictureUrl: "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
                    popularity: 15.656534,

                },
                {
                    name: "Monica Bellucci",
                    pictureUrl: "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
                    popularity: 16.096436,

                },
                {
                    name: "Gal Gadot",
                    pictureUrl: "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
                    popularity: 10.049256,

                },
                {
                    name: "Ian McKellen",
                    pictureUrl: "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
                    popularity: 10.070132,

                }
            ]

        }
    }
    addRandomContact = () => {
        const randomContact = contacts[Math.floor(Math.random() * contacts.length)]
        const tempList = [...this.state.contacts]
        tempList.push(randomContact)
        this.setState({
            contacts: tempList
        })
    }
}


render(){
    return (
        <>
            <button onClick={this.addPerson} style={{ width: '100%', margin: '30px 0' }} >
                Agregar personaje
            </button>
            <ul>
                <button onClick={this.addRandomContact}>Add Random Contact</button>
                {this.state.contacts.map((person) =>
                    <Contact name={person.name} popularity={person.popularity} pictureUrl={person.pictureUrl} />)
                }
            </ul>
        </>
    )
}



export default Contacts
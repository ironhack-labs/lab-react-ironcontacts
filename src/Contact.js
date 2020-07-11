import React, { Component } from 'react'
import contacts from './contacts.json';
import UnContact from './UnContact';

class Contact extends Component {

    constructor(props) {
        super(props)
        console.log(contacts)
        this.state = { listaContacts: [{
            "name": "Idris Elba",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
            "popularity": 11.622713,
            "id": "11731993-0604-4bee-80d5-67ad845d0a38"
          },
          {
            "name": "Johnny Depp",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
            "popularity": 15.656534,
            "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06"
          },
          {
            "name": "Monica Bellucci",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
            "popularity": 16.096436,
            "id": "0ad5e441-3084-47a1-9e9b-b917539bba71"
          },
          {
            "name": "Gal Gadot",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
            "popularity": 10.049256,
            "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2"
          },
          {
            "name": "Ian McKellen",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
            "popularity": 10.070132,
            "id": "0067ae32-97b6-4431-898e-eb1c10150abb"
          }] }
    }


    addContact=()=>{
        const contactRandom= contacts[Math.floor(Math.random() * contacts.length)]
        const contactCopy=[...this.state.listaContacts];
        contactCopy.push(contactRandom)
        this.setState({listaContacts:contactCopy})
    }

    sortName=()=>{
        const contactCopy=[...this.state.listaContacts];
        const listaOrdena= contactCopy.sort((a,b)=>{ 
            if(a.name < b.name){
                return -1;
            }
            else {
                return 1;
            }
        })
        this.setState({listaContacts:listaOrdena})
    }

    sortPopularity=()=>{
        const contactCopy=[...this.state.listaContacts];
        const listaOrdena= contactCopy.sort((a,b)=>{ return a.popularity - b.popularity})
        this.setState({listaContacts:listaOrdena})
    }

    removeContact=(id)=>{
        const contactCopy=[...this.state.listaContacts];
        const contactIndex= contactCopy.findIndex(item=>item.id ===id)
        contactCopy.splice(contactIndex,1)
        this.setState({listaContacts:contactCopy})
    }


    render() {

        const listaContactos = this.state.listaContacts.map(contact => {
            return (
                <UnContact key={contact.id} contact={contact} clickToRemove={()=> this.removeContact(contact.id)} />
            )
        })


        return (
            <div>
                <button onClick={this.addContact}>Add random contact</button>
                <button onClick={this.sortName}>Sort by Name</button>
                <button onClick={this.sortPopularity}>Sort by Popularity</button>
                <table>
                    <thead>
                        <tr>
                            <td>Picture</td>
                            <td>Name</td>
                            <td>Popularity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {listaContactos}
                    </tbody>




                </table>
            </div>
        )
    }
}

export default Contact 
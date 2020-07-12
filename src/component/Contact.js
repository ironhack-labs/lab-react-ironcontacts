import React, { Component } from 'react'
import contacts from '../contacts.json';
import UnContact from './UnContact';

class Contact extends Component {

    constructor(props) {
        super(props)
        console.log(contacts)
        this.state = { listaContacts: [{
            "name": "Ben Affleck",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/cPuPt6mYJ83DjvO3hbjNGug6Fbi.jpg",
            "popularity": 9.157077,
            "id": "1599707e-5f49-4529-b920-db3831419b04"
          },
          {
            "name": "James McAvoy",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/oPIfGm3mf4lbmO5pWwMvfTt5BM1.jpg",
            "popularity": 9.098376,
            "id": "fef2ac16-36df-486d-8d69-41f1bafa8101"
          },
          {
            "name": "Robin Wright",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/cke0NNZP4lHRtOethRy2XGSOp3E.jpg",
            "popularity": 8.802542,
            "id": "5133d421-dc81-4e3a-81fa-57816da7ce60"
          },
          {
            "name": "Hugh Jackman",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/oOqun0BhA1rLXOi7Q1WdvXAkmW.jpg",
            "popularity": 8.58347,
            "id": "1144413a-4d60-45e4-a51e-ec9ad321d835"
          },
          {
            "name": "Sam Page",
            "pictureUrl": "https://image.tmdb.org/t/p/w500/hCe4MEgugU33IdvDtDkJ6E5siqx.jpg",
            "popularity": 8.42623,
            "id": "711c69fe-4f64-453d-853a-05f40d004302"
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
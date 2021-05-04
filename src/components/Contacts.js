import { Component } from 'react'
import './Contacs.css'
import Contacts from "../contacts.json";

import Table from "./Table"


class DynamicContacts extends Component {

    constructor(){
        super()
        this.state = {
            contactsList : Contacts,
            filteredContacts: Contacts.slice(0, 4)
        }
        
    }

    newRandomContact(){
        //uno random
        const indexRandom = Math.floor(Math.random() * ([Contacts.length - 1]))
        const newRandom = Contacts[indexRandom]
        //sacas copia
        const copyOfContacts = [...this.state.filteredContacts]
        //modificas copia
        copyOfContacts.push(newRandom)
        //actualizas setState con la copia
        this.setState(
             {
                filteredContacts: copyOfContacts
            })
    }
    sortByName(){

       const deepCopy = JSON.parse(JSON.stringify(Contacts)) //si aquí pusiese this.state.filteredContacts se ordenarian los cinco primeros COOL 
        //pero los que añado no se ordenan correctamente por eso he puesto COntacts aunque salen todos cuando les das a filtrar por sort, entonces no se como hacerlo para que se muestren ordenados y que salgan de una en uno
        //const orderedContacts = deepCopy.map(elm => elm.name) Esta era mi duda de si no había que sacar los nombres de los artistas antes de hacer un sort con ellos pero ya veo que no
        deepCopy.sort(function(prev, next){
            if(prev.name > next.name){
                return 1
            }if(prev.name < next.name){
                return -1
            }
            return 0
        })

        this.setState({
            filteredContacts: deepCopy
        })
    }
    sortByPopularity(){

        const deepCopy = JSON.parse(JSON.stringify(Contacts))

        deepCopy.sort(function (prev, next) {
            if (prev.popularity > next.popularity) {
                return 1
            } if (prev.popularity < next.popularity) {
                return -1
            }
            return 0
        })
         this.setState({
            filteredContacts: deepCopy
        })
    }

    deleteContact(contactId) {
        this.setState({
            filteredContacts: this.state.filteredContacts.filter(elm => elm.id !== contactId)
        })
    }

    render(){
 
    return(
    <>
      <div className="title">
        <h1>IRONHACK CONTACTS</h1>
     </div>
    <header className="subTitle">
        <h1> <strong>Picture</strong></h1>
        <h1><strong>Name</strong></h1>
        <h1><strong>Popularity</strong></h1>
     </header>
     <div className="buttons">
        <button onClick={() => this.newRandomContact()}>Add Random Contact</button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
     </div>

       {
           this.state.filteredContacts.map(elm => <Table key={elm.id} deleteOneContact = {() => this.deleteContact(elm.id)} picture={elm.pictureUrl} name={elm.name} popularity={elm.popularity}/>)
       }
       
    </>
    )

    }
}

export default DynamicContacts
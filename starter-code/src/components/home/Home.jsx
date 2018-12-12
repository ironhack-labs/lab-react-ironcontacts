import contacts from './contacts.json'
import React, {Component} from 'react'
import Table from './Table'
import './home.css'

class Home extends Component{

    state = {
        contact:contacts.slice(0,5),
        contact2:contacts.slice(5,contacts.length)
    }

    render(){
        const { contact, contact2 } = this.state

        return(
            <div className="banner">
                <h1>IronContacts</h1>
                <div className="cont-botones">
                    <button className="botones" onClick={this.addRandom}>Agrega</button>
                    <button className="botones" onClick={this.sortByName}>Ordena (Nombre)</button>
                    <button className="botones" onClick={this.sortByPopularity}>Ordena (Popularidad)</button>
                </div>
                <div className="tabla">
                <table border="2px">
                    <tr>
                        <th>Name</th>
                        <th>Picture</th>
                        <th>Popularity</th>
                        <th>Delete</th>
                    </tr>

                    
                    {contact.map((contact, index)=>
                    <Table key={index} {...contact} deleteContact={()=>this.eraseContact(index)}/>)}
                    
                </table>
                </div>
            </div>
        )
    }

    addRandom = () =>{
        const { contact } = this.state
        const indexR = Math.floor(Math.random()*contacts.length)

        this.state.contact.push(contacts[indexR])
        this.setState({
            contact: contact
        })
    }

    sortByName = () =>{
        const { contact } = this.state
        const contactSortedByName = contact.sort(this.compareNames)

        this.state.contact
        this.setState({
            contact: contactSortedByName
        })
    }

    compareNames = (a,b) =>{
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
        return 0
    }

    sortByPopularity = () =>{
        const { contact } = this.state
        const contactSortedByPopularity = contact.sort(this.comparePopularity)

        this.state.contact
        this.setState({
            contact : contactSortedByPopularity
        })
    }

    comparePopularity = (a,b) =>{
        if(a.popularity < b.popularity) return 1
        if(a.popularity > b.popularity) return -1
        return 0
    }

    eraseContact = (index) =>{
        const { contact } = this.state
        const deleteContact = contact.splice(index, 1)

        this.state.contact
        this.setState({
            contact: contact
        })
    }

}

export default Home
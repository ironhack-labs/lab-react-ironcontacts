import React, { Component } from 'react'
import contacts from '../../contacts.json';
import Card from '../cards/Cards'

class Table extends Component{

    constructor() {
        super()
        this.state = {
            contact: contacts.slice(0,4)
        }
    }

pushContact = () => {
    const contactsCopy = [...this.state.contact]
    contactsCopy.push(contacts[Math.floor(Math.random()*contacts.length)])
    this.setState({ contact: contactsCopy })
}

deleteContact = idx => {
    const contactsCopy = [...this.state.contact]
    contactsCopy.splice(idx, 1)
    this.setState({ contact: contactsCopy })
}

sortByName = () =>{
    const contactsCopy = [...this.state.contact]
    contactsCopy.sort(function (a, b) {
        if (a.name > b.name) {return 1}
        if (a.name < b.name) {return -1}
        return 0})
    this.setState({ contact: contactsCopy })
}

sortByPopularity = () =>{
    const contactsCopy = [...this.state.contact]
    contactsCopy.sort(function (a, b) {
        if (a.popularity < b.popularity) {return 1}
        if (a.popularity > b.popularity) {return -1}
        return 0})
    this.setState({ contact: contactsCopy })
}


render(){

    return (

        <>
            <button onClick={()=>this.pushContact()}>Add random Contact</button>
            <button onClick={()=>this.sortByName()}>Sort by name</button>
            <button onClick={()=>this.sortByPopularity()}>Sort by popularity</button>
          <table>
              <thead>
                <tr>
                    <td>Picture</td>
                    <td>Name</td>
                    <td>Popularity</td>
                    <td>Action</td>
                 </tr>
              </thead>
                <tbody>
                    {this.state.contact.map((elm,idx) =><Card key={idx} {...elm} deleteOneContact={() => this.deleteContact(idx)}/>)}
                </tbody>
          </table>
        </>
      )
    }
}

export default Table
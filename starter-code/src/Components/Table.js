import React, { Component } from 'react'
import contacts from '../contacts.json'

export class Table extends Component {

state= {
    showContacts: contacts.splice(0,5),
    AllContacts: contacts
}

getContacts = () => {
const contactArray = this.state.showContacts.map((thisContact, i) => {
    return (
        <div key={i}>
   <li> 
   <img width= "40px" height="60px" src={thisContact.pictureUrl}/>
     {thisContact.name} 
{thisContact.popularity}
</li>
<button> Delete </button>
</div>
    )
})
return contactArray;
}

addContact = () => {
 const RandomContacts = this.state.AllContactsMath.floor(Math.random()*this.state.AllContacts.length))
}



sortByName = () => {
    this.setState({
    showContacts: {... this.state.showContacts}.sort(compare)
    })
}



    render() {

     
        return (
           <div className="flex">
           <button onClick={this.sortByName}> Sort by Name</button>

           <button onClick={this.addContact()}> Add Contact </button>
          {this.getContacts()}
        </div>
        )
    }
}

export default Table

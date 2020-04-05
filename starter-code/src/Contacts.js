import React, {Component} from 'react';
import contacts from './contacts.json';
import Celebs from './Celebs'

class Contacts extends Component {
    constructor() {
        super()
        this.state = { selectedContacts:contacts.slice(0, 5) }
        this.handleClick = this.handleClick.bind(this)
        this.deleteContact = this.deleteContact.bind(this)
    }
    

     handleClick() {
        let randomCeleb = contacts[Math.floor(Math.random() * contacts.length)];
        let tempContacts2 = [...this.state.selectedContacts]
        tempContacts2.push(randomCeleb)
        this.setState({selectedContacts:tempContacts2})
    }
     deleteContact(id) {
        let tempContacts = [...this.state.selectedContacts]
        let oneToDelete = tempContacts.findIndex((item) => {
            return (item.id === id)
        })
        tempContacts.splice(oneToDelete, 1)
        this.setState({selectedContacts:tempContacts})
    }
render() {
    return (
        <div>
            <button onClick={()=>this.handleClick()}>Add Random Contact</button>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.selectedContacts.map((celeb) => {
                        return (<Celebs
                            key={celeb.id}
                            index={celeb.id}
                            name={celeb.name}
                            pictureUrl={celeb.pictureUrl}
                            popularity={celeb.popularity}
                                deleteThis={this.deleteContact}
                            />)
                        })
                    }
                </tbody>
            </table>
        </div>
    )}
}

// Class component class Contacts extends Component {   state = {     contacts :
// contacts.slice(0,5)   }   addRandomContact = ()=> {     let tmpCopy =
// [...this.state.contacts];     // get a random contact     // push random
// contact to tmpCopy using contacts from contacts.json     // set contacts to
// tmpCopy using this.setState   }   render() {return <table>   <button>Add
// random contact</button>   <thead>     <tr>       <th>Picture</th>
// <th>Name</th>       <th>Popularity</th>     </tr>   </thead>   <tbody>
// {(this.state.contacts.map((contact)=>{     // return the Celeb component with
// the correct contact props   } }   </tbody></table>}   }

export default Contacts;
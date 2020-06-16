import React, {Component} from 'react'
import Contact from './Contact'
import contacts from '../contacts.json'
class IronTable extends Component {
    state = {
        contacts: contacts.slice(0,5),
        notShowing: contacts.slice(4)
    }
    addRandomContact = () =>{
        let notShowingClone = [...this.state.notShowing]
        let contactsClone = [...this.state.contacts]
        let randomContact = notShowingClone.splice(Math.random() * notShowingClone.length-1,1)[0]
        this.setState({
            contacts: [randomContact, ...contactsClone],
            notShowing: notShowingClone
        })
    }
    sortByName = () =>{
        this.setState({
            contacts: [...this.state.contacts].sort( (el1, el2) => el1.name.localeCompare(el2.name))
        })
    }
    sortByPopularity = () =>{
        this.setState({
            contacts: [...this.state.contacts].sort( ({popularity: popularity1}, {popularity: popularity2}) => popularity2-popularity1)
        })
    }
    deleteContact = (id) =>{
        this.setState({
            contacts: this.state.contacts.filter( el => el.id !== id)
        })
    }
    render(){
        return <div>

            <button onClick={this.addRandomContact}>Add random contact</button>
            <button onClick={this.sortByName}>Sort by name</button>
            <button onClick={this.sortByPopularity}>Sort by popularity</button>
            <table>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { this.state.contacts.map( contact => {
                    return <Contact key={contact.id} picture={contact.pictureUrl} name={contact.name} deleteFunc={()=>{this.deleteContact(contact.id)}} popularity={contact.popularity.toFixed(2)} />
                })}
            </tbody>
            </table>
        </div>
    }
}
export default IronTable;
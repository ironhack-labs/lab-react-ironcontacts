
import './table.css'
import Celebrities from './celebrities'
import contacts from '../../contacts'
import { Component } from 'react'

class Table extends Component {
    constructor() {
        super()
        this.state = {
            contact: contacts,
            count: 5
        }
    }    
    
    sort = () => {

       this.setState({
           filtercontact: this.state.contact.sort(function (a, b) {
            return (a.name.localeCompare(b.name))
            })
        })
    }

    sortPop = () => {
        let newContacts = this.state.contact.slice(0, this.state.contact.length)

        newContacts.sort(function (a, b) {
            if (a.popularity > b.popularity) { return -1; }
            if (a.popularity < b.popularity) { return 1; }
            return 0;
        })

        this.setState({
            contact: newContacts
        })
    }
  
    
    delete = id => {
        let myContacts = this.state.contact
        let newContacts = []
        myContacts.map(elm => elm.id !== id ? newContacts.push(elm) : null)
        this.setState({
            contact: newContacts,
            count: this.state.count - 1
        })
    }
    
    addCel = () => {
        let myContacts = this.state.contact.slice(0, this.state.count)
        const newUser = contacts[Math.floor(Math.random() * contacts.length)];
        console.log(myContacts)
        console.log(newUser)
        myContacts.push(newUser)
        this.setState({
            contact: myContacts,
            count: +this.state.count + 1
        })
        console.log(myContacts)
     


    }

        // myContacts.push(newUser)
    render() {
        const filtercontact = this.state.contact
        console.log(filtercontact)
        return (
            <>
            <div className="buttons">
                <button onClick={this.addCel}>ADD A Celebrity</button>
                <button onClick={this.sort}>Sort By Name </button>
                    <button onClick={this.sortPop}>Sort By Popularity </button>
                </div>
            <table className="maintable">
                <tbody className="file">
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                    </tr>
                </tbody>
                    {filtercontact.map((elm, idx) => idx < this.state.count ? <tbody><tr><Celebrities key={elm.id} pictureUrl={elm.pictureUrl} name={elm.name} popularity={elm.popularity} /><th><button onClick={() => this.delete(elm.id)}> Delete</button></th> </tr></tbody> 
 : null)}

            </table></>)
    }

}

export default Table
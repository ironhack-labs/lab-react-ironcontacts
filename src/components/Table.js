import React, {
    Component
} from 'react'
import contacts from '../contacts.json'
import Contact from './Contact'
var contactsList = [...contacts]
var seed = [...contacts].splice(0,5)


class Table extends Component {

    constructor() {
        super()
        this.state = {
            contacts :seed
        }
    }

    addRandomContact = () => {
        const newArray = [...this.state.contacts]
        const indexArray = Math.floor(Math.random()*contactsList.length)
        newArray.push(contactsList.splice(indexArray,1)[0])
        this.setState({contacts: newArray})
    }

    nameSort = () => {
        const newArray = [...this.state.contacts]
        console.log(newArray)
        newArray.sort((a,b) => a.name.localeCompare(b.name))
        this.setState({contacts: newArray})
    }

    popularitySort = () => {
        const newArray = [...this.state.contacts]
        newArray.sort((a,b) => b.popularity-a.popularity)
        this.setState({contacts: newArray})
    }

    deleteMovieHandler = id => {
        const newArray = [...this.state.contacts]
        const contactsIndex = newArray.findIndex(item => item.id === id)
        //remover
        newArray.splice(contactsIndex, 1) 
        //actualizar estado
        this.setState({contacts: newArray})
    }

    render() {
        const listContacts =  this.state.contacts.map(item => (
            <Contact key={item.id} {...item} clickToDelete={() => this.deleteMovieHandler(item.id)}/>
        ))
        return ( 
            <div className='container'>
                <h1>IronContacts</h1>
                <div>
                    <button onClick= {this.addRandomContact}>Add Random Contact</button>
                    <button onClick={this.nameSort}>Sort by Name</button>
                    <button onClick={this.popularitySort}>Sort by Popularity</button>
                </div>
                <div >
                    <table >
                        <tr>
                            <th><b>Picture</b></th>
                            <th><b>Name</b></th>
                            <th><b>Popularity</b></th>
                            <th><b>Action</b></th>
                        </tr> 
                        {listContacts} 
                    </table>
                </div>    
            </div>    
            )
    }
}

export default Table
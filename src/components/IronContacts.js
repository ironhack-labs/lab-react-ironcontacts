import React from 'react';
import contacts from '../contacts.json';

class IronContacts extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            currentContacts : contacts.slice(0,5),
            numOfContacts : 5
        }
    }
    handleAddContact = () =>{
        let contactsUpdated = [...this.state.currentContacts];
        contactsUpdated.push(contacts[this.state.numOfContacts+1])
        console.log(contactsUpdated);
        this.setState({
            currentContacts: contactsUpdated,
            numOfContacts: this.state.numOfContacts + 1
        })
    }
    handleSortByName = () =>{
        let toSort = [...this.state.currentContacts];
        toSort.sort((a,b) => { 
            if(b.name > a.name) return -1
            else if(b.name < a.name) return 1
            return 0
        })
        this.setState({
            currentContacts: toSort
        })
    }
    handleSortByPopularity = () =>{
        let toSort = [...this.state.currentContacts];
        toSort.sort((a,b) => { 
            if(a.popularity > b.popularity) return -1
            else if(a.popularity < b.popularity) return 1
            return 0
        })
        this.setState({
            currentContacts: toSort
        })
    }
    handleDelete = (id) =>{
        let deleted = [...this.state.currentContacts];
        deleted.splice(id,1)
        this.setState({
            currentContacts: deleted
        })
    }
    render(){
        return (<div>
                    <div className = 'btn-group'>
                        <button onClick = {this.handleAddContact}>Add a random Contact</button>
                        <button onClick = {this.handleSortByName}>Sort by name</button>
                        <button onClick = {this.handleSortByPopularity}>Sort by popularity</button>
                    </div>
                
                    <h1>Iron Contacts</h1>
                    <table>
                        <thead>
                            <tr>
                                <th><h3>Picture</h3></th>
                                <th><h3>Name</h3></th>
                                <th><h3>Popularity</h3></th>
                                <th><h3>Action</h3></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.currentContacts.map((contact,i) => {
                                return (
                                        <tr key = {i}>
                                            <td key = {'img' + i}><img src={contact.pictureUrl} alt ='img' width='50'/></td>
                                            <td key = {'name' + i}>{contact.name}</td>
                                            <td key = {'pop' + i}>{contact.popularity.toFixed(2)}</td>
                                            <td><button onClick = {()=>this.handleDelete(i)}>Delete</button></td>
                                        </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
            </div>
        )
    }
}

export default IronContacts
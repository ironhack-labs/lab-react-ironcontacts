import React, {Component} from 'react';
import contacts from '../contacts.json';
import './DynamicTable.css'

class DynamicTable extends Component{

    state = {contactsState: contacts.slice(0,5)}

    addRandom(){
        let randomContact = contacts[Math.floor(Math.random()*contacts.length)]
        this.setState({contactsState: [...this.state.contactsState, randomContact]})
    }

    sortByName(){
        this.setState({contactsState: this.state.contactsState.sort((a, b) => { 
            let nameA = a.name.toUpperCase(); 
            let nameB = b.name.toUpperCase(); 
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
        })})     
    }

    sortByPopularity(){
        this.setState({contactsState: this.state.contactsState.sort((a, b) => b.popularity - a.popularity)})
    }

    delete(index){
        let newContacts = [...this.state.contactsState]
        newContacts.splice(index,1)
        this.setState({contactsState: newContacts}) 
    }

    renderTableData() {
        return this.state.contactsState.map((contacts, index) => {
        const { id, name, pictureUrl, popularity } = contacts
        return (
            <tr key={id}>
                <td> <img className="picture" src={pictureUrl} alt=""/></td>
                <td>{name}</td>
                <td>{popularity.toFixed(2)}</td>
                <td><button onClick={()=>this.delete(index)}>Delete</button></td>
            </tr>
        )
        });
    }

    render() {
        return (
        <div class='style'>
        <h1 id='title'>IronContacts</h1>
        <button onClick ={() => this.addRandom()}>Add Random Contacts</button>
        <button onClick={()=>this.sortByName()}>Sort By Name</button>
        <button onClick={()=>this.sortByPopularity()}>Sort By Popularity</button>
        <table class = "tableStyle" id='ID'>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr> 
            </thead>
            <tbody>
                 {this.renderTableData()}
            </tbody>
        </table>
        </div>
        )
     }
}

export default DynamicTable;
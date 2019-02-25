import React, { Component } from 'react';
import ContacItem from './ContactItem';


export default class ContactsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: this.props.contacts || [],
            firstContacts: this.props.contacts.slice(0, 5)
        }
    }


   
addNewContact = () => {
    const newContacts = this.state.contacts.filter(c => !this.state.firstContacts.includes(c))
    const randomContact = newContacts[Math.floor(Math.random() * newContacts.length)]
    let newFirst = this.state.firstContacts
    newFirst.push(randomContact)
    this.setState({
        firstContacts: newFirst
    })
}
sortByName = () => {
    const sortedFirstByName = this.state.firstContacts.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({
        firstContacts: sortedFirstByName
    })

}

 

sortByPopularity = () => {
    const sortedFirstByPopularity = this.state.firstContacts.sort( (a, b) => b.popularity - a.popularity )
    this.setState({
        firstContacts: sortedFirstByPopularity
    })
}

deleteContact = (index) => {
    const newFirst = this.state.firstContacts
    newFirst.splice(index, 1)
    this.setState({
        firstContacts: newFirst
    })
}




    render() {
        return (
            <div>
                <div className="btn-group" role="group" aria-label="...">
                        <button type="button" className="btn btn-default" onClick={this.addNewContact}>Add Random Contact</button>
                        <button type="button" className="btn btn-default" onClick={this.sortByName}>Sort By Name</button>
                        <button type="button" className="btn btn-default" onClick={this.sortByPopularity}>Sort By Popularity</button>
                </div> 
                <table style= {{width: '50%', textAlign: 'center', margin: 'auto'}}>
                    
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th> 
                            <th>Popularity</th>
                            <th></th>
                        </tr>
                    
                        {this.state.firstContacts.map((contact, index) =>{
                            return <ContacItem key={index} {...contact} deleteContact={() => this.deleteContact(index)}/>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

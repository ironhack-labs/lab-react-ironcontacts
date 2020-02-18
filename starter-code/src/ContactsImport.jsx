import React, { Component } from 'react';

export default class ContactsImport extends Component {
    state = {
        contactHere: this.props.contacts.slice(0,4),
        newContact: {},
        contactRest: this.props.contacts.slice(5, this.props.contacts.length)

    };
    
    addContact = () => {
        const copy = [...this.state.contactRest];
        let randomValue = Math.floor(Math.random()*(copy.length));
        let contact = copy[randomValue];
        this.setState({newContact: contact});
        const copy2 = [...this.state.contactHere];
        copy2.push(contact);
        this.setState({contactHere: copy2})
    };

    filterName = () => {
        let copy = [...this.state.contactHere];
        copy.sort(function(a,b) {
            if(a.name < b.name) return -1;
            if(a.name> b.name) return 1;
            return 0;
        });
        console.log(copy);
        this.setState({contactHere : copy});

    };

    filterPopu = () => {
        let copy = [...this.state.contactHere];
        copy.sort(function(a,b) {
            if(b.popularity < a.popularity) return -1;
            if(b.popularity> a.popularity) return 1;
            return 0;
        });
        console.log(copy);
        this.setState({contactHere : copy});

    };


    handleContact = () => {
        alert("handle");
    };

    handleDelete = index => {
        this.setState({ contactHere : this.state.contactHere.filter((u, i) => i !== index)});
    }
    
    render() {
        
        const contactsExtract = this.state.contactHere;
        
        return (
            <div>
                <div className = "addInput">
                    <button onClick = {this.addContact}>Add</button>
                </div>
                <div className = "addInput">
                    <button onClick = {this.filterName}>Sort By Name</button>
                </div>
                <div className = "addInput">
                    <button onClick = {this.filterPopu}>Sort By Popularity</button>
                </div>
            <table>
                <tr>
                    <td>Picture</td>
                    <td>Name</td>
                    <td>Popularity</td>
                    <td>Id</td>
                </tr>
                
                    {contactsExtract.map((contact, i) => (
                    <tr>   
                    <td><img src={contact.pictureUrl} alt="toto" className = "imageContact"/>
                    </td> 
                    <td key = {i}>
                    {contact.name}</td>
                    <td>{contact.popularity}</td> 
                    <td><button onClick = {() => this.handleDelete(i)}>-</button> </td> 
                    </tr>
                ))
                }      
            </table>
            </div>
        )     
    }
}


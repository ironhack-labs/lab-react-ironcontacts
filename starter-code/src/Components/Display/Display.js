import React, { Component } from 'react';
import ContactCard from '../ContactCard/ContactCard'
import AddButton from '../AddButton/AddButton';
class Display extends Component {
    state = {
        contacts: this.props.contacts.slice(0, 10)
    };

    addRandom = function(){
        let newState = {
            ...this.state
        }
        newState.contacts.push(this.props.contacts(Math.floor(Math.random()*this.props.contacts.length)))
        this.setState(newState)
    }

    sortByName = function(){
        let newState = {
            ...this.state
        }
        newState.contacts.sort((a,b) =>{
            if(a.name < b.name) {return -1;}
            if(a.name > b.name) {return 1;}
        })
        this.setState(newState)
    }

    sortByPopularity = function(){
        let newState = {
            ...this.state
        }
        newState.contacts.sort((a,b) =>{
            {b.popularity - a.popularity}
        })
        this.setState(newState)
    }

    deleteContact = function(name){
        let newState = {
            ...this.state
        }
        newState.contacts = newState.contact.filter((elem)=>elem.name !== name)
        this.setState(newState)
    }

    render() {
        return (
        <div className="Display">
            <AddButton functionProp={this.addRandom}>Add Random Contact</AddButton>
            <AddButton functionProp={this.sortByName}>Sort by name</AddButton>
            <AddButton functionProp={this.sortByPopularity}>Sort by popularity</AddButton>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th> 
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.contacts.map((contact, index) => 
                        <ContactCard key={index} img={contact.pictureUrl} name={contact.name} popularity={contact.popularity}>
                        </ContactCard>  
                        )
                    }
                </tbody>
            </table>
        </div>
        );
    }

}

export default Display;


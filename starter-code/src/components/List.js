import React, { Component } from 'react';
import Card from './Card';
import contacts from '../contacts'

class List extends Component {
    constructor(){
        super();
        this.state = {
            theContacts: contacts,
        }
    }

    render() {
        console.log(this.state.theContacts);
        let filteredContacts = this.state.theContacts.filter((ele, index) => {return index < 6}) ;
  
        return (
            <div>
                {    
                    filteredContacts.map((oneContact, index) => {
                       return <Card key={index} {...oneContact} />                          
                    })    
                }
            </div>
        );
    }

}

export default List;

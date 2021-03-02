
import React from 'react';
import contacts from '../../../contacts.json';

class AddRandom extends React.Component {

    
    addRandomContact() {
        const randomContact = contacts[Math.floor(Math.random() * contacts.length) + 0];
        
    }

    render(){
        return (
            <button className="btn btn-dark" onClick={() => this.addRandomContact() } >Add Random Contact</button>
        );
    }
}

export default AddRandom;
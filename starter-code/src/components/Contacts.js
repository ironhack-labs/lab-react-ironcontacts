import React, { Component } from 'react';
import contacts from '../contacts.json'

class Contacts extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const listActors = [];
        for (let i = 5; i > 0; i--) {
            listActors.push([contacts[i].name, contacts[i].pictureUrl, contacts[i].popularity])
        }
        return(listActors)
    }
}
export default Contacts
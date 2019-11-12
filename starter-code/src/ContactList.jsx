import React from 'react';

import contactList from './contacts.json';

import './ListOfContacts.css';

import OneSingleContact from './OneSingleContact';



class ContactList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contact: contactList.splice(0,5),
            otherContacts: contactList.splice(5, contactList.length),
            name: contactList.name,
        }
    }

    showContact = () =>{
        return this.state.contact.map((eachContact,i)=>{
            return(
            <div id="flex-box-two">
                <OneSingleContact
             key={i}
             theContact = {eachContact}
              />
              <button onClick = {()=>{this.deleteContact(i)}}>Delete</button>
            </div>
            )
        })
    }

    deleteContact = (theIndex) =>{
        let clone = [...this.state.contact];
        // step 1 is to grab theinfo out of the state and clone it

        clone.splice(theIndex, 1);
        // step 2 is to do wahtever you want to do to that thing and you can do it in regular javascript

        this.setState({contact: clone})
        // step 3 is to take that thing you edited and use it to set the state

    }

    addRandom = () =>{
        let othersClone = [...this.state.otherContacts];

        let rand = othersClone.splice(Math.floor(Math.random()*othersClone.length), 1)[0]
        
        console.log(...this.state.otherContacts)


        let clone = [...this.state.contact];

        if(rand)
        clone.unshift(rand);
        
        this.setState({contact: clone, otherContacts: othersClone})
    }
    
    
    sortByName = () => {
        let contactsByName = [...this.state.contact]
        let sortedContacts = contactsByName.sort(function(a, b){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        });

        this.setState({contact: sortedContacts})
    }

    sortByPopularity = () => {
        let contactsByPop = [...this.state.contact]
        let sortedContactsPop = contactsByPop.sort(function(a, b){
            if(b.popularity < a.popularity) return -1;
            if(b.popularity > a.popularity) return 1;
            return 0;
        });
        this.setState({contact: sortedContactsPop})
    }


render(){

    console.log(this.state)

    return(
        <div>
        <button onClick = {this.addRandom}>Add Random Contact</button>
        <button onClick = {this.sortByName}>Sort By Name</button>
        <button onClick = {this.sortByPopularity}>Sort By Popularity</button>
        {this.showContact()}
        </div>
    )
}


}

export default ContactList;

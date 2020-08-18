import React from 'react'
import contacts from './contacts.json';
import ContactDetails from './ContactDetails'

class ListedContacts extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            contacts: contacts.slice(0,5),
        }
    }


    handleClick=()=>{
        let cloneContacts = [...this.state.contacts]
        let newRandom = contacts[(Math.floor(Math.random()*contacts.length))]
        cloneContacts.unshift(newRandom)
        this.setState({
            contacts: cloneContacts
        })
    }

    sortByName=()=>{
        let cloneContacts = [...this.state.contacts]
        cloneContacts.sort((a,b)=>{
            if(a.name < b.name) {return -1}
            if(a.name > b.name) {return +1}
            return 0;
        })
        this.setState({
            contacts: cloneContacts,
        })
    }

    sortByPopularity=()=>{
        let cloneContacts = [...this.state.contacts]
        cloneContacts.sort((a, b)=>{
            if(a.popularity > b.popularity) {return -1}
            if(a.popularity < b.popularity) {return +1}
            return 0;
        })
        this.setState({
            contacts: cloneContacts,
        })
    }

    deleteOne =(index)=>{
        let cloneContacts = [...this.state.contacts]
        cloneContacts.splice(index,1)
        this.setState({
            contacts:cloneContacts
        })
    }

    render(){
        return <div>
            <div >
            <button onClick={this.handleClick}>Add random character</button>
            <button onClick={this.sortByName}>Order by Name</button>
            <button onClick={this.sortByPopularity}>Order by Popularity</button>
            </div>
            {this.state.contacts.map((contact,i)=>{
               return <ContactDetails 
                key={i} 
                contact={contact}
                index={i}
                onDelete={this.deleteOne}
                />
           })
           }
        </div>
        
    }
}

export default ListedContacts

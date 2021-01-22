import React from 'react'
import contacts from '../../data/contacts.json'

class AddRandomContact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: contacts.slice(5,)
        }
    }

    addRandomContact = () =>{

        let contactsArray
        let newContact
        let removedContact
        const random = Math.round(Math.random() * ((this.state.contacts.length-1) - 0) + 0)

        if(this.state.contacts.length===1){
            contactsArray = [...this.state.contacts]
            newContact = this.state.contacts[0]
            removedContact = contactsArray.splice(0,1)
            this.setState({contacts: contactsArray})
            this.props.addRandom(newContact)
        }else if(this.state.contacts.length>1){
            contactsArray = [...this.state.contacts]
            newContact = this.state.contacts[random]
            removedContact = contactsArray.splice(random,1)
            this.setState({contacts: contactsArray})
            this.props.addRandom(newContact)
        }else{
            alert('you have added all the contacts possible!')
        }
    }


    render(){
        return(
            <button onClick={()=> this.addRandomContact()}>ADD RANDOM CONTACT</button>
        )
    }


}


export default AddRandomContact
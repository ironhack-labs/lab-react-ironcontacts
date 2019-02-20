import React, { Component } from "react";

// import logo from "../logo.svg";

import "./contactList.css";

import contacts from '../contacts.json'

import Table from 'react-bootstrap/Table'

import Button from 'react-bootstrap/Button'

class ContactList extends Component {
    constructor(props){
        super(props);
        this.state={contactsArray: contacts.slice(0, 5)}

        }
addContact(){
    const {contactsArray}= this.state;
    const newContact = Math.floor(Math.random() * contacts.length);
   let foo = contacts[newContact];

  contactsArray.push(foo);
    
    this.setState(contactsArray);
}
compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
sortContact(key){
    const {contactsArray}= this.state;
    contactsArray.sort(this.compareBy(key))
    this.setState(contactsArray);
}
deleteMovie(contactIndex){
    const {contactsArray}= this.state;
    //remove the movie from the Array
    contactsArray.splice(contactIndex, 1);

    this.setState(contactsArray);
}

render(){
    const{contactsArray}= this.state;
    return(
        <section>
            <p>
                {contactsArray[0].name}
            </p>
            
    
            <Button className="buttons" variant="primary" size="lg" onClick={()=> this.addContact()}>Add an Contact</Button>   
            <Button className="buttons" variant="secondary" size="lg" onClick={()=> this.sortContact("name")}>Sort by name</Button> 
            <Button className="buttons" variant="warning" size="lg" onClick={()=> this.sortContact("popularity")}>Sort by popularity</Button> 
              <Table striped bordered hover>
                <thead>
                    <tr>
                    
                    <th>Name</th>
                    <th>Picture</th>
                    <th>popularity</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    

                    {contactsArray.map((oneContact, index) =>{
                    return (
                        
                    <tr key={oneContact._id} className="contact">

                    <td>{oneContact.name}</td>
                    <td><img src={oneContact.pictureUrl}/></td>
                    <td>{oneContact.popularity}</td>
                    <td><button onClick={() => this.deleteMovie(index)}>Delete</button></td>
                    </tr>
                    
                      
                           
                    );
                    })}

                </tbody>
                </Table>;
                 
        </section>
    )
}
}
export default ContactList;
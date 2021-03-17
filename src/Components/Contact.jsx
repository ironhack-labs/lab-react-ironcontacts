import React, { Component } from "react";
import contactsJSON from "../contacts.json";

class Contacts extends Component {
    state= {
        contacts: contactsJSON.slice(0,5),
    };
    handleRandomActor =() =>{
        const copyContacts = [...this.state.contacts];
        

       let addrandomContact = copyContacts => copyContacts[Math.floor(Math.random()* this.copyContacts.length)];
       copyContacts.push(addrandomContact);
       this.setState({contacts:copyContacts});
    }

    sortByName =()=>{
        const copyContacts = [...this.state.contacts];
        let sortedNames = copyContacts => copyContacts.sort((a,b)=> a.name.localeCompare(b.name))
        

        this.setState({contacts:copyContacts});
        return sortedNames;
    }
    sortByPopularity =()=>{
        const copyContacts = [...this.state.contacts];
        let sortedPopularity = copyContacts => copyContacts.sort((a,b)=> a.popularity.localeCompare(b.popularity))
        

        this.setState({contacts:copyContacts});
   
    }
    handleRemoveContact(contactToRemoveIndex){
        const copyContacts = [...this.state.contacts];
        copyContacts.splice(contactToRemoveIndex,1);
        this.setState({contacts:copyContacts});
    }



    render (){
        return (
            <div>
                <div className ="btns">
        <div className="button">
        <button onClick={this.handleRandomActor}>Add Random Contact</button>
        </div>
        <div className="button">
        <button onClick={this.sortByName}>Sort by Name</button>
        </div>
        <div className="button">
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        </div>
        </div>
                <table>
                 <thead>
                     <tr>
                         <th>Picture</th>
                         <th>Name</th>
                         <th>Popularity</th>
                         <th>Action</th>
                     </tr>
                 </thead>
                {this.state.contacts.map((contacts)=> (
             <tbody>
                 <tr className ="table">
            <td><img className ="image" src = {contacts.pictureUrl}/></td>
            <td className ="table">{contacts.name}</td>
            <td className ="table">{Math.round(contacts.popularity *100)/100}</td>
            <td className ="table"><button onClick={this.state.handleRemoveContact}>Delete</button></td>
            
                 </tr>
             </tbody>
            
                ))}
                 </table>
                
            </div>
            
        
                
           )}

    

}
export default Contacts;
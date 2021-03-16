import React, { Component } from "react";
import contactsJSON from "../contacts.json";

class Contacts extends Component {
    state= {
        contacts: contactsJSON.slice(0,5),
    };
    handleRandomActor () {
        const copyContacts = [...this.state.contacts];

       let randomActor = copyContacts => copyContacts[Math.floor(Math.random()* copyContacts.length)];
      
    }

    render (){
        return (
            <div>
                <table>
                 <thead>
                     <tr>
                         <th>Picture</th>
                         <th>Name</th>
                         <th>Popularity</th>
                     </tr>
                 </thead>
                {this.state.contacts.map((contacts)=> (
             <tbody>
                 <tr className ="table">
            <td><img className ="image" src = {contacts.pictureUrl}/></td>
            <td class ="table">{contacts.name}</td>
            <td class ="table">{Math.round(contacts.popularity *100)/100}</td>
            
                 </tr>
             </tbody>
            
                ))}
                 </table>
                
            </div>
            
        
                
           )}

    

}
export default Contacts;
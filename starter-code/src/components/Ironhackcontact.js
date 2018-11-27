
import contacts from '../contacts.json'

import React, {Component} from "react";

class Ironhackcontacts extends Component{
    constructor(props){
        super(props);
        this.state={
            contactsList: contacts.slice(0,5)
        } 
     }

     addcontact(){
        const{contactsList}=this.state;
        const randomNumber = Math.floor(Math.random()*contacts.length);
        contactsList.push(contacts[randomNumber]);
        
         this.setState({contactsList});
    }

    sortByName(){
        const { contactsList} = this.state;

        console.log(contactsList);
         contactsList.sort((a,b)=>{
            var nameA=a.name.toLowerCase()
            var nameB=b.name.toLowerCase()
            if (nameA < nameB)//sort string ascending
              { return 1}
            if (nameA > nameB)
               {return -1}
            else {return 0}  
         })
         console.log(contactsList);

         this.setState({
             contactsList
         })
    }

    sortBypopularity(){
        const{contactsList} = this.state;
        contactsList.sort((a,b)=>{
            if (a.popularity<b.popularity)
            {return-1}
            if (a.popularity>b.popularity)
            {return 1}
            else {return 0}
        })
        this.setState({
            contactsList
        })
    }

    deleteContact(index){
        const {contactsList}= this.state;
        contactsList.splice(index,1);
        this.setState({contactsList});
    }





  render(){
      const{contactsList} = this.state;

     

      const contactsHtml = contactsList.map((oneContact,index)=>{
        return(
        
            <tr key = {index}>
                <td>{oneContact.name}</td>
                <td><img src={oneContact.pictureUrl}/></td>
                <td>{oneContact.popularity}</td>
                <td><button onClick={()=>this.deleteContact(index)}>Delete</button></td>
            </tr>
         

        );
      });
      return(
          <section className = "ironhackcontacts">
            <h2>Contact List</h2>
                 <button onClick = {()=>this.addcontact()}>Add Random Contacts</button>
                  
                  <button onClick = {()=>this.sortByName()}>Sort by name</button>
                   
                  <button onClick = {()=>this.sortBypopularity()}>Sort by popularity</button>

                  <button onClick = {()=>this.sortBypopularity()}>Sort by popularity</button>

            <table>
                {contactsHtml}
            </table>
          </section>

     );

   }  
}


export default Ironhackcontacts;
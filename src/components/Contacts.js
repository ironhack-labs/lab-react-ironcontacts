import React, { Component } from 'react'
import contacts from './../contacts.json';
import Card from './../components/Card'

class Contacts extends Component {

    state = {
        contactsData: contacts.slice(0,5),
        
      }
    
      randomContact = (contact) =>{
        
        let contactRandom = this.state.contactsData[Math.floor(Math.random() * this.state.contactsData.length)];
        let newContact=[...this.state.contactsData]
        newContact.push(contactRandom)
        this.setState({contactsData:newContact})
        
        
      }

      sortByName=()=>{
        let contactsOrdered=this.state.contactsData.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
           
       
            return 0;
        })
        this.setState({contactsData:contactsOrdered})
      }

      sortByPopularity=(contact)=>{
        let orderedByPop=this.state.contactsData.sort(function(a, b) {
            
            return a.popularity - b.popularity;
          });
        
          this.setState({contactsData:orderedByPop})
      }

      deleteContact=(id)=>{
        let updatedContacts = this.state.contactsData.filter( (contact) => {
            if (contact.id !== id) 
            return contact ;
          });
      
          this.setState({ contactsData: updatedContacts })
        }
      

    render() {
        return (
            <div>
                <button onClick={this.randomContact}>Add Random Contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>


                    <table>
                    <tr>
                        <th>Picture </th>
                        <th>Name</th> 
                        <th>Popularity</th>
                        <th>Action</th>

                    </tr>

                    
                    {this.state.contactsData.map((contactsObj) => {
                            return <Card key={contactsObj.id} {...contactsObj}  removeContact={this.deleteContact} />
                        })

                    }

                    </table>
            </div>
        )
    }
}

export default Contacts

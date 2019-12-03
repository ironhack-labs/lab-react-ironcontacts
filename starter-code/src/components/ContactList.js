
import React, { Component } from 'react';

import ContactCard from './ContactCard';

class ContactList extends Component {

 constructor(props) {
    super(props); 
       this.state = {
        contacts: this.props.contactsArr,
        contactsfiltered : this.props.contactsArr.slice(0,5),
        restofcontacts : this.props.contactsArr.slice(5),
       
        }
    };


    clickRandom = () => {
        if (this.state.restofcontacts.length!==0) {

        let randomindex = Math.floor(Math.random() * this.state.restofcontacts.length);
        let randomcontact = this.state.restofcontacts[randomindex];
        let newarray = this.state.contactsfiltered;
        this.state.restofcontacts.splice(randomindex,1);

        newarray.push(randomcontact);
        this.setState({contactsfiltered : newarray, restofcontacts : this.state.restofcontacts }); // this causes the rerender mindful beacuse is asinconous
        }
      
      };


      clicksortByName = () => {
       let contactsortedbyName = this.state.contactsfiltered;
        
       contactsortedbyName.sort(function(a, b) {
           
           if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
         
          return 0;
          });
          
        this.setState({contactsfiltered : contactsortedbyName});
      }


      clicksortByPopularity= () => {
        let contactsortedbyPopularity = this.state.contactsfiltered;
         
        contactsortedbyPopularity.sort(function(a, b) {
           
           return b.popularity-a.popularity;
           });
           
         this.setState({contactsfiltered : contactsortedbyPopularity });
       }

        deleteMovie = (contactIndex) => {
            // copy movies from state
            const contactsCopy = this.state.contactsfiltered;
            // Edit the copy
            contactsCopy.splice(contactIndex, 1);
            // Set back the updated state
            this.setState({contactsfiltered : contactsCopy});
        } 

    render() {
    return (

        <div className="table-container">
        <h1>IronContacts</h1>
        {this.calculate}
        <div>
        {<button onClick={this.clickRandom}>Random</button>}
        {<button onClick={this.clicksortByName}>Sort by name</button>}
        {<button onClick={this.clicksortByPopularity}>Sort by Popularity</button>}
        </div>
        <div>
        <table>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
            </tr>
        {
            
            this.state.contactsfiltered.map( (oneCard, index) => {

            return <ContactCard key={index} {...oneCard} clickToDelete={ ()=> this.deleteMovie(index)} />
            }
            )


        }
        </table>
        </div>
        </div>

          
      
    )
    }
}
  export default ContactList; 
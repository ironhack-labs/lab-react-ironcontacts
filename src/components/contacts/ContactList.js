import React from 'react';
import Contact from './Contact'
import contacts from '../../data/contacts.json'
import AddRandom from './AddRandom'
import SortByName from './SortByName'
import SortByPopularity from './SortByPopularity'

class ContactList extends React.Component {

    state = { contacts: contacts.slice(0,5) }



    addRandomContact = (contact)=>{
        const allContacts = [...this.state.contacts, contact]
        this.setState({contacts: allContacts})
    }

    sortByName = () =>{
        function compare( a, b ) {
            if ( a.name < b.name ){
              return -1;
            }
            if ( a.name > b.name ){
              return 1;
            }
            return 0;
          }
          
          const contactsArray = [...this.state.contacts]
          this.setState({contacts: contactsArray.sort( compare )})
    }


    sortByPopularity = () =>{
        function compare( a, b ) {
            if ( a.popularity > b.popularity ){
              return -1;
            }
            if ( a.popularity < b.popularity ){
              return 1;
            }
            return 0;
          }
          
          const contactsArray = [...this.state.contacts]
          this.setState({contacts: contactsArray.sort( compare )})
    }

    deleteContact(contactId){
        const currentContacts = [...this.state.contacts];
        const contactIndex = currentContacts.findIndex( item => item.id === contactId);
        currentContacts.splice(contactIndex, 1);

        // Remember: DO NOT MODIFY STATE DIRECTLY... use setState()
        this.setState({
            contacts: currentContacts
        });
    }



    render(){
        
        const contactList = this.state.contacts.map(el => {
            return (
                <Contact key={el.id} clickToDelete={() => this.deleteContact(el.id)} {...el} />
            )
        })
        return (
            <React.Fragment>
                <AddRandom addRandom={this.addRandomContact}/>
                <SortByName sortName={this.sortByName}/>
                <SortByPopularity sortPopularity={this.sortByPopularity}/>
                <div className="ContactList">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Picture
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Popularity
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactList}
                        </tbody>
                        
                    </table>
                 </div>
            </React.Fragment>
        )
    }

}

export default ContactList
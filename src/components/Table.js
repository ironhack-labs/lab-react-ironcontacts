import React from 'react';
import contacts from '../contacts.json';
import ContactDetail from './ContactDetail';


class Table extends React.Component {

    constructor(props){
        super(props); // read more on this
        this.state = {
        contacts: contacts.slice(0, 5), //trying to get the first contacts of the list from 0 to 5

        };
   
    }
    
    //interation 2
    addRandom(){
            let index = contacts[Math.floor(Math.random() * contacts.length)];
            this.setState((state) => ({
                contacts: state.contacts.concat(index) 
              }));
            };

    //interation 3     
    
    nameSort = () => {
        let clonecontacts= [...this.state.contacts]
        clonecontacts.sort((a,b) => {
            if (a.name < b.name){
                return -1
            }
            else if (a.name > b.name){
                return 1
            }
            return 0
        })

        console.log(clonecontacts)
        this.setState({
            contacts: clonecontacts,
        })
    }

    //Interation 4
    //sort
    popularitySort = () => {
        let contactsPopularity= this.state.contacts.sort(function(b, a){return a.popularity - b.popularity})
        this.setState({
            contacts: contactsPopularity,
        })
    }

    //delete

    contactDelete = (index) => {
        let deleteContact = [...this.state.contacts]
        deleteContact.splice(index, 1)
        this.setState({
            contacts: deleteContact
        })

    }

    render() {
        
        return (
            <div>
            <button onClick={() => this.addRandom()}>Add Random</button> 
            <button onClick={() => this.nameSort()}>Sort by Name</button> 
            <button onClick={() => this.popularitySort()}>Sort by Popularity</button> 

        <table>
            <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td> <button onClick={() => this.props.Delete(this.props.index) }>Delete</button></td>
            </tr>
            
        {
              this.state.contacts.map((contact, i) => {
                return <ContactDetail
                        key={i} 
                        contact={contact}
                        id={i} 
                        Delete={this.contactDelete}
                        />
                   })
            }

        </table>
        </div>
        
 );
}

}

export default Table;
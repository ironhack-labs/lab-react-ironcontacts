import contacts from '../../contacts.json'
import React, { Component } from 'react'
import { ContactListContainer } from './ContactList.styled'
import ContactItem from '../ContactItem/ContactItem'
import AddRandom from '../AddRandom/AddRandom'



export default class ContactList extends React.Component {

        state = {
            
            copyContacts: contacts.slice(0,5)
            
        }

    
    displayContacts = () => {

       return( 

       this.state.copyContacts.map(({pictureUrl, name, popularity, id})=>{

       return(
            <div>

            <ContactListContainer>
                <tr><ContactItem img={pictureUrl} name={name} popularity={popularity}/></tr>

                <tr><button onClick={()=>this.deleteContact(id)}>Delete</button></tr>
                
            </ContactListContainer>
                

            </div>
               
           )
       })

    )}

    randomizer = () => {

        let index = Math.floor(contacts.length*(Math.random()))

        return index;
       }


    addRandom() {
        
       const currentContacts = [...this.state.copyContacts];

        currentContacts.push(contacts[this.randomizer()])

        

        this.setState({

            ...this.state,
            copyContacts: currentContacts 

        })

       }
       sortName(){
        console.log("holaaaa");
        const currentContacts = [...this.state.copyContacts];

        this.setState({

            ...this.state,
            copyContacts: currentContacts.sort((a, b) => {
                
                return a.name.localeCompare(b.name)
            } 

        )
            
    })



       }

       sortPopularity(){

        const currentContacts = [...this.state.copyContacts];

        this.setState({

            ...this.state,
            copyContacts: currentContacts.sort((a, b) => {
                
                return b.popularity-a.popularity
            } 

        )
            
    })

       }

         deleteContact (id) {


            this.setState({

            ...this.state,
            copyContacts: this.state.copyContacts.filter(elem => elem.id !== id)
            
        })
    }
    
       
    render() {
        return (
            <div>
               
                <AddRandom clickRandom = {()=>this.addRandom()} clickSortName = {()=>this.sortName()} clickSortPopularity = {()=>this.sortPopularity()}/>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    <tr>
                        <td>
                            {

                                this.displayContacts()
                            }

                        </td>
                
                    </tr>

                </table>
            </div>
            
        )
    }

}


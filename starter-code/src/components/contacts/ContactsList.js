import React, { Component } from 'react'
import Contacts from '../../contacts'
import ContactCard from './ContactCard'
import './ContactsList.css'
import Buttons from './Buttons'

class ContactsList extends Component {

    state = {
        contacts:  [],
        poolContacts: []
    }

    componentDidMount() {
        setTimeout(() => {

            this.setState({
                contacts: [...Contacts.slice(0,5)],
                poolContacts: [...Contacts.slice(5,Contacts.length-1)]
            })

        }, 1000);
 
    }

    listContacts = () => 
        this.state.contacts.map( (c,i) => (
            <ContactCard 
                key={i}
                {...c}
                deleteContact={() => this.deleteContact(c)}
            />
        ))

    handleClickRandom = () => {
        if (this.state.poolContacts.length > 0) {
            const randCont =  this.state.poolContacts[Math.floor(Math.random() * this.state.poolContacts.length)];
          
            this.setState({
                contacts: [randCont, ...this.state.contacts],
                poolContacts: this.state.poolContacts.filter(e => e.id !== randCont.id)
            }, () => {
                // setState is async !!!
                // to check objects 'moved' from one to another array
                // console.log(this.state.contacts)
                // console.log(this.state.poolContacts)
            })

         } else {
             alert('No more contacts available')
         }
    }
/*
    REFACTORED INTO 1 FUNCTION

    handleClickSortByName = () => {
        this.setState({
            contacts: [...this.state.contacts].sort((a,b) => a.name.localeCompare(b.name))
        })
    }

    handleClickSortByPopularity = () => {
        this.setState({
            contacts: [...this.state.contacts].sort((a,b) => b.popularity - a.popularity)
        })
    }
*/
    handleClickSortByKey = (key) => {

        const result = [...this.state.contacts].sort((a, b) => {
            switch (key) {
              case 'name':
                return a.name.localeCompare(b.name);
              case 'popularity':
                return b.popularity - a.popularity;
              default:
                  return [...this.state.contacts]
            }
          });
      
          this.setState({
            contacts: result
          });

    }

    deleteContact = (contact) =>  {
        this.setState({
            contacts: this.state.contacts.filter(c => c !== contact),
            poolContacts: [contact, ...this.state.poolContacts]
        })
    }
    
    render() {
      return (
        <div className="ContactsList row flex-row">
            <Buttons 
                randomContact={() => this.handleClickRandom()}
                //sortByName={() => this.handleClickSortByName()}
                //sortByPopularity={() => this.handleClickSortByPopularity()}
                sortByKey={(key) => this.handleClickSortByKey(key)}
            />
            <div className='col col-12'>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope="col">PICTURE</th>
                            <th scope="col">NAME</th>
                            <th scope="col">POPULARITY</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.listContacts()}
                    </tbody> 
                </table>
            </div>
        </div>   
      )
    }
}

export default ContactsList
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
    
    render() {
      return (
        <div className="ContactsList row flex-row">
            <Buttons 
                randomContact={() => this.handleClickRandom()}
                sortByName={() => this.handleClickSortByName()}
                sortByPopularity={() => this.handleClickSortByPopularity()}
            />
            <div className='col offset-4 col-8'>
                <table>
                    <thead>
                        <tr>
                            <td>PICTURE</td>
                            <td>NAME</td>
                            <td>POPULARITY</td>
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
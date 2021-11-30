import React from 'react'
import './ContactList.css'
import contacts from '../../contacts.json'
import RandomContactBtn from '../RandomContactBtn/RandomContactBtn';
import SortByNameBtn from '../SortByNameBtn/SortByNameBtn'
import SortByPopularityBtn from '../SortByPopularityBtn/SortByPopularityBtn';
import DeleteBtn from '../DeleteBtn/DeleteBtn';


class ContactList extends React.Component {

    constructor() {
        super()

        this.state = {
            contacts: contacts,
            currentContacts: contacts.slice(0,5),
        }

    }


    randomNumber(min, max) { 
        return Math.floor(Math.random() * (contacts.length - 0 + 1))
    }
    


    handleClick() {
        const newContact = this.state.contacts[this.randomNumber()]
        const newState = [...this.state.currentContacts]
        newState.unshift(newContact)
        
        this.setState({ currentContacts: newState})

    }


    sortByName() {
        const newArray = [...this.state.currentContacts]

        const orderedArray = newArray.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })


        this.setState({ currentContacts: orderedArray })
    }


    sortByPopularity() {
        const newArray = [...this.state.currentContacts]

        const orderedArray = newArray.sort(function(a,b){
            if(a.popularity < b.popularity) {return 1;}
            if(a.popularity > b.popularity) {return -1;}
            return 0;
        })

        this.setState({ currentContacts: orderedArray })
    }


    deleteContact(contactId) {
        const newContacts = this.state.currentContacts.filter(contact => contact.id !== contactId)
        this.setState({ currentContacts: newContacts })
    }


    render() {

        return (
            <div className="global-container">
                <div>
                    <div className="cards-container">
                        {this.state.currentContacts.map((eachContact) => 
                            <div className="card-envelope-container">
                                <div className="envelope-body">
                                    <div className="card">
                                        <div className="card-img-container">
                                            <img className="card-img" src={eachContact.pictureUrl} alt={eachContact.pictureUrl}></img>
                                        </div>

                                        <div className="card-info-container">
                                            <div>
                                                <div className="title-container">
                                                    <h1>{eachContact.name}</h1>
                                                </div>
                                                <h3>Popularity:</h3>
                                                <p className="subtitle">{eachContact.popularity}</p>
                                            </div>
                                            <div className="delete-btn-container">
                                                <DeleteBtn deleteContact={() => this.deleteContact(eachContact.id)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="envelope-top"></div>
                                </div>
                            </div>
                        )}
                    
                    

                    </div>
                </div>
                <div className="btns-container">
                    <div className="btn-margin">
                        <RandomContactBtn handleClick={() => this.handleClick()} />
                    </div>

                    <div className="btn-margin">
                        <SortByNameBtn sortByName={() => this.sortByName()} />
                    </div>

                    <div className="btn-margin">
                        <SortByPopularityBtn sortByPopularity={() => this.sortByPopularity()} />
                    </div>

                </div>

            </div>
        )
    }

}


export default ContactList
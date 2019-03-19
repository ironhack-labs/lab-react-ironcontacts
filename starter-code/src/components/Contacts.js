import React, { Component } from 'react';
import contacts from '../contacts.json'
import ContactCard from './ContactCard'

class Contacts extends Component {
    
    constructor() {
        super()

        let first5 = []

        for(let i = 0; i < 5;i++){
            first5.push(contacts[i])
        }

        this.state = {first5}
    }

    addRandom = () => {
       const selection = Math.floor(Math.random() * ((contacts.length-1) - 5) + 5)
       console.log(selection)
       const contactsCopy = [...this.state.first5]
       contactsCopy.push(contacts[selection])
       this.setState({
           first5: contactsCopy
    })
    }

    sortByName = () => {
        
        let contactsCopy = [...this.state.first5]

        let sorted = contactsCopy.sort(function(a,b){
            let first = a.name
            let second = b.name
            if (first < second) return -1;
            else if (first > second) return 1;
            return 0;
        })
        this.setState({
            first5: sorted
    })
    }

    sortByPopularity = () => {
        
        let contactsCopy = [...this.state.first5]

        let sorted = contactsCopy.sort(function(a,b){
            let first = a.popularity
            let second = b.popularity
            if (first < second) return 1;
            else if (first > second) return -1;
            return 0;
        })
        this.setState({
            first5: sorted
    })
    }

    deleteContact = contactIndex => {

        let contactsCopy = [...this.state.first5]

        contactsCopy.splice(contactIndex, 1)
        this.setState({
            first5: contactsCopy  // asignamos la copia
        })
    }

    render (){
        return (
            <section id="contacts-container">

                <button onClick={this.addRandom} class="select-buttons">Add Random Contact</button>
                <button onClick={this.sortByName} class="select-buttons">Sort by Name</button>
                <button onClick={this.sortByPopularity} class="select-buttons">Sort by Popularity</button>

                <table class="table-container">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.first5.map((contact, index) => <ContactCard 
                        key={index} 
                        {...contact}
                        clickToDelete={() => this.deleteContact(index)} 
                        />)
                    }
                    </tbody>
                </table>
            </section>
        )
    }
}

export default Contacts;
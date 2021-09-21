import contactList from '../../contacts.json'
import React from 'react'
import ContactItem from '../ContactItem/ContactItem'
import './ShowContacts.css'

class ShowContacts extends React.Component {

    state = {
        contacts: contactList,
        currentContacts: contactList.slice(0, 5),
        reducedList: contactList.slice(5),
        descendingName: false,
        descendingPop: false
    }

    displayFive = () => {

        return (
        this.state.currentContacts.map((contact, idx) => {
            return <ContactItem key={idx} {...contact} deleteContact={(id) => this.deleteContact(id)} />
        }))
    }

    addRandom = () => {
        
        const copiedFilteredContacts = this.state.currentContacts
        const copiedContacts = this.state.contacts

        let randomNum = (Math.floor((Math.random() * this.state.reducedList.length)))

        const randomContact = this.state.reducedList[randomNum]

        console.log(this.state.reducedList)

        copiedFilteredContacts.push(randomContact)
        const reducedContacts = this.state.reducedList.filter((contact) => this.state.reducedList.indexOf(contact) !== randomNum)

        this.setState({
            currentContacts: copiedFilteredContacts,
            reducedList: reducedContacts
        })
    }

    sortByName = () => {

        let descendingNameCopy = this.state.descendingName
        const currentContactCopy = [...this.state.currentContacts]

        if (this.state.descendingName === false ) {
            descendingNameCopy = true;
            this.setState ({
                ...this.state,
                currentContacts: currentContactCopy.sort((a, b) => a.name.localeCompare(b.name)),
                descendingName: descendingNameCopy
            })
        } else {
            descendingNameCopy = false;
            this.setState ({
                ...this.state,
                currentContacts: currentContactCopy.sort((a, b) => b.name.localeCompare(a.name)),
                descendingName: descendingNameCopy
            })
        }   
    }

    sortByPopularity = () => {
        
        let descendingPopCopy = this.state.descendingPop
        const currentContactCopy = [...this.state.currentContacts]

        if ( this.state.descendingPop === false ) {
            descendingPopCopy = true;
            this.setState ({
                ...this.state,
                currentContacts: currentContactCopy.sort((a, b) => b.popularity - a.popularity),  
                descendingPop: descendingPopCopy
            })
        } else {
            descendingPopCopy = false
            this.setState ({
                ...this.state,
                currentContacts: currentContactCopy.sort((a, b) => a.popularity - b.popularity),
                descendingPop: descendingPopCopy
            })
        }
    }

    deleteContact = (id) => {
        this.setState({
          ...this.state,
          currentContacts: this.state.currentContacts.filter(contact => contact.id !== id)
        })
    }


    render() {
        return (
            <div className='table_container'>
                <h2>IronContacts_</h2>
                <table className='contacts-table'>
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th></th>
                        </tr>
                        {
                            this.displayFive()
                        }
                    </tbody>
                </table>
                <button className='topButton' onClick={() => this.addRandom()}>Add Random</button>
                <button className='topButton' onClick={() => this.sortByName()}>Sort by Name</button>
                <button className='topButton' onClick={() => this.sortByPopularity()}>Sort by Popularity</button>
            </div>
        )
    }
}

export default ShowContacts
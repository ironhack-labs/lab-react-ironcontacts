import React from 'react';
import ContactDetails from './ContactsDetail';
import RandomBtn from '../components/RandomButton';
import SortButton from './SortButton';
import '../App.css';

class Contacts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
             contactsArr: props.array.slice(0, 5)
        }
    }

    handleRandom = (wholeArr) => {
        let randomContact = wholeArr[Math.floor(Math.random() * wholeArr.length)];
        let contactsClone = [...this.state.contactsArr]
        contactsClone.push(randomContact)

        this.setState({
            contactsArr: contactsClone
        })
    }

    handleSort = (sortBy) => {
        let contactsClone = [...this.state.contactsArr]
        if (sortBy === 'letter') {
            contactsClone.sort((a,b) => {
                if (a.name < b.name){
                    return -1
                }
                else if (a.name > b.name){
                    return 1
                }
                return 0
            })
        } else {
            contactsClone.sort((a,b) => {
                return b.popularity - a.popularity
            })
        }
    
        this.setState({
            contactsArr: contactsClone
        })
    }

    handleDelete = (id) => {
        let contactsClone = [...this.state.contactsArr]
        contactsClone.splice(id, 1)

        this.setState({
            contactsArr: contactsClone
        })
    }

    render() {
        return (
            <div>
                <RandomBtn array={this.state.contactsArr} onRandom={this.handleRandom} wholeArr={this.props.array}>Add a Random Contact</RandomBtn>
                <SortButton sortBy={'letter'} sort={this.handleSort}>Sort by name</SortButton>
                <SortButton sortBy={'popularity'} sort={this.handleSort}>Sort by popularity</SortButton>
                <table className="contact-list">
                    <thead>
                        <tr className="tablerow">
                            <th>Image</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.contactsArr.map((contact, i) => {
                            return  <ContactDetails
                                    key={i}
                                    contact={contact}
                                    id={i}
                                    onDelete={this.handleDelete}
                                    />
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Contacts;

import React from 'react';
import './table.css';
import contacts from '../../contacts.json';

class Table extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          contactList: contacts.splice(0,5)
        }
      }


    showContacts = () =>{
        return this.state.contactList.map((eachContact, i)=>{
            return(
                <tr key={i}>
                    <td><img src={eachContact.pictureUrl}/></td>
                    <td>{eachContact.name}</td>
                    <td>{eachContact.popularity.toFixed(2)}</td>
                    <td><button onClick={() => {this.deleteContact(i)}}>Delete</button></td>
                </tr>
            )
        })
    }

    addContact = () => {
        let newContact = contacts.splice(Math.floor(Math.random() * contacts.length), 1);
        let newContactList = [...this.state.contactList];
        newContactList.push(newContact[0]);
        this.setState({
            contactList: newContactList,
            descendingPop: -1,
            descendingName: 1,
          })
    }

    sortByPop = () => {
        let sortedList = [...this.state.contactList];
        sortedList.sort((a, b) => {
            if (a.popularity < b.popularity) {
                return -1 * this.state.descendingPop
            } else if (a.popularity > b.popularity) {
                return 1 * this.state.descendingPop
            } else {
                return 0
            }
        })
        this.setState({
            contactList: sortedList,
            descendingPop: this.state.descendingPop * -1
        })
    }

    sortByName = () => {
        let sortedList = [...this.state.contactList];
        sortedList.sort((a, b) => {
            return ('' + a.name).localeCompare(b.name) * this.state.descendingName;
        })
        this.setState({
            contactList: sortedList,
            descendingName: this.state.descendingName * -1
        })
        console.log(this.state.descendingName);
    }

    deleteContact = (i) => {
        let alteredList = [...this.state.contactList];
        alteredList.splice(i, 1);
        this.setState({
            contactList: alteredList,
        })
    }


    render(){
        return (
            <div className="contact-table">
                <h1>IronContacts</h1>
                <div className="the-buttons">
                    <button onClick={this.addContact}>Add random contact</button>
                    <button onClick={this.sortByName}>Sort by name</button>
                    <button onClick={this.sortByPop}>Sort by popularity</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showContacts()}
                    </tbody>
                </table>
            </div>




        )
    }
}

export default Table;
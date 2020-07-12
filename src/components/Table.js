import React, { Component } from 'react'
import contacts from '../contacts.json'
import Button from './Button'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allContacts: [...contacts].splice(5),
            fiveContacts: [...contacts].splice(0, 5)
        }
        this.randomContact = this.randomContact.bind(this)
        this.sortByName = this.sortByName.bind(this)
        this.sortByPop = this.sortByPop.bind(this)
        this.deleteContact = this.deleteContact.bind(this)//El valor de this es ignorado cuando la función es llamada con el operador new.

    }

    contactsResult() {
        return this.state.fiveContacts.map(ele => (
            <tr key={ele.id}>
                <td><img className="tablePic" src={ele.pictureUrl} alt='contact img' /></td>
                <td><p>{ele.name}</p></td>
                <td><p>{ele.popularity}</p></td>
                <td><Button actionBut={this.deleteContact} text="Delete" /></td>
            </tr>
        ))
    }

    randomContact() {
        let index = Math.floor(Math.random() * this.state.allContacts.length);
        let copyFiveContacts = [...this.state.fiveContacts]
        let copyAllContacts = [...this.state.allContacts]
        const elemToPush = copyAllContacts[index]
        copyFiveContacts.push(elemToPush)
        copyAllContacts.splice(index, 1)
        console.log(index)
        console.log(copyAllContacts.splice(index, 1))
        console.log(elemToPush)


        this.setState({
            allContacts: copyAllContacts,
            fiveContacts: copyFiveContacts
        })
    }

    sortByName() {
        let copyToSort = [...this.state.fiveContacts];
        copyToSort.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0
            }
        });
        this.setState({
            fiveContacts: copyToSort,
        })
    }

    sortByPop() {
        let copySortByPop = [...this.state.fiveContacts];
        copySortByPop.sort((a, b) => b.popularity - a.popularity)

        this.setState({
            fiveContacts: copySortByPop,
        })

    }

    deleteContact(i) {
        let copyToDelete = [...this.state.fiveContacts];
        copyToDelete.splice(i, 1);

        this.setState({
            fiveContacts: copyToDelete,
        })
    }

    render() {
        return (
            <div className="main">
                <div className="buttonsDiv">
                    <Button  actionBut={this.randomContact} text="Add a random contact" />
                    <Button  actionBut={this.sortByName} text="Sort by name" />
                    <Button  actionBut={this.sortByPop} text="Sort by popularity" />
                </div>
                <div className="tableDiv">
                    <table>
                        <thead>
                            <tr>
                                <th><h2>Picture</h2></th>
                                <th><h2>Name</h2></th>
                                <th><h2>Popularity</h2></th>
                                <th><h2>Action</h2></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.contactsResult()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Table

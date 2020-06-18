import React, { Component } from 'react';
import Contact from "./Contact";
import data from "../contacts.json"

class ContactList extends Component {
    constructor(){
        super();
        let contacts = [...data]
        let contactList = contacts.splice(0, 5)
        this.contactList= contactList
        this.state = {
            contactList : contactList
        }
    }

    addRandom = ()=>{
        let newContactList = [...this.state.contactList];
        newContactList.unshift(data[Math.floor(Math.random() * Math.floor(data.length))])
        this.setState({contactList : newContactList})
    }
    sortByPopularity = () =>{
        function dynamicSort(property) {
            return function(a, b) {
                return (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
            }
         }
         let newContactList = this.state.contactList.sort(dynamicSort('popularity'))
         this.setState({contactList : newContactList}) 
    }
    sortByName = () =>{
        function dynamicSort(property) {
            return function(a, b) {
                return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            }
         }
         let newContactList = this.state.contactList.sort(dynamicSort('name'))
         this.setState({contactList : newContactList})
    }

    render() {
        
     return (
         
        <div className = "container">
            <div className ="button-box">
                <button onClick = {this.addRandom} >ADD RANDOM</button>
                <button onClick = {this.sortByPopularity} >SORT BY POPULARITY</button>
                <button onClick = {this.sortByName} >SORT BY NAME</button>
            </div>
                <table>
                <thead>
                    <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                {
                        this.state.contactList.map((oneContact, index) => {
                        return <Contact
                            key = {index}
                            img = {oneContact.pictureUrl}
                            name = {oneContact.name}
                            popularity = {oneContact.popularity}/>
                        })
                }      
                </tbody>
            </table>
        </div> 
        );
    }
}

export default ContactList;

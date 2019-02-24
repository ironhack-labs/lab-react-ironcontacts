import React, { Component } from 'react';
import ContacItem from './ContactItem';


export default class ContactsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: this.props.contacts || [],
            firstContacts: this.props.contacts.slice(0, 5)
        }
    }

    // function checkAvailability(arr, val) {
    //     return arr.some(arrVal => val != arrVal);
    // }

    addNewContact = () => {
        let randomContact = this.state.contacts[Math.floor(Math.random() * this.state.contacts.length)]
        let newFirst = this.state.firstContacts
        newFirst.push(randomContact)
        this.setState({
            firstContacts: newFirst
        })
    }

    render() {
        return (
            <div>
                <div className="btn-group" role="group" aria-label="...">
                        <button type="button" className="btn btn-default" onClick={this.addNewContact}>Add Random Contact</button>
                        <button type="button" className="btn btn-default">Middle</button>
                        <button type="button" className="btn btn-default">Right</button>
                </div> 
                <table style= {{width: '50%', textAlign: 'center', margin: 'auto'}}>
                    
                    <tbody>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th> 
                            <th>Popularity</th>
                        </tr>
                    
                        {this.state.firstContacts.map((contact, index) =>{
                            return <ContacItem key={index} {...contact}/>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

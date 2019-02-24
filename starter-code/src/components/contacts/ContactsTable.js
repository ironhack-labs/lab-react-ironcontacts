import React, { Component } from 'react';
import ContacItem from './ContactItem';


export default class ContactsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contacts: this.props.contacts || [],
            firstFive: this.props.contacts.slice(0, 5)
        }
    }

    render() {
        return (
            <table style= {{width: '50%', textAlign: 'center', margin: 'auto'}}>
                <tbody>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th> 
                        <th>Popularity</th>
                    </tr>
                
                    {this.state.firstFive.map((contact, index) =>{
                        return <ContacItem key={index} {...contact}/>
                    })}
                </tbody>
            </table>
        );
    }
}

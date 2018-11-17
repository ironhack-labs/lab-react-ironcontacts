import React, {Component} from  'react';
import contacts from '../contacts';
import Column from './Columns'
import styles from './Home.module.css';
import {Random} from './Random'


class Home extends Component {


    constructor(){
        super();
        this.state = {
            contacts,
            newContacts: []
        }
    };

    getFiveContacts = () => {
        const num = 5;
        for (let i =0; i < num; i++) {
            this.state.newContacts.push(this.state.contacts[i]);
        }
        /*this.state.fiveContacts = this.state.contacts.map(contact => {
            if(this.state.fiveContacts.length <= 5) return
            contact
        })*/
    };

    getRandomContact = () => {
        let {newContacts}=this.state;

        let randomNumber = Math.floor (Math.random ()*199)+1
        newContacts.push(randomNumber)

        this.setState({newContacts})
    };

    render(){
        this.getFiveContacts()
        //this.getRandomContact()
        return(
            <div className={styles}>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                    {this.state.newContacts.map((contact, i) => <Column key={i} contact={contact} />)}
                </table>
            </div>
        )
    }
}

export default Home;
import React, {Component} from  'react';
import contacts from '../contacts';
import Column from './Columns'
import styles from './Home.module.css';
import Random from './Random'


class Home extends Component {


    constructor(){
        super();
        this.state = {
            contacts,
            newContacts: []
        }
    };

    componentWillMount(){
        this.getFiveContacts()
    }

    getFiveContacts = () => {
        /*const num = 5;
        for (let i =0; i < num; i++) {
            this.state.newContacts.push(this.state.contacts[i]);
        }*/
        this.state.newContacts = this.state.contacts.map(contact => {
            if(this.state.newContacts.length <= 5) return contact
        })
    };

    getRandomContact = () => {


        let {newContacts, contacts}=this.state;
let newArr = contacts.splice(5)
        let randomNumber = newArr[Math.floor (Math.random()*newArr.length)];
        newContacts.push(randomNumber)

        this.setState({newContacts})
    };

    render(){
        return(
            <div className={styles}>
                <Random getRandom={this.getRandomContact}/>
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
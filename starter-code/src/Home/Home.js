import React, {Component} from  'react';
import contacts from '../contacts';
import Column from './Columns'
import styles from './Home.module.css';
import Random from './Random'
import Byname from "./Byname";
import Delebtn from './Deleteboton';

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
        this.state.newContacts = this.state.contacts.filter((contact,i) => {
            if(i<5){
                return contact;
            }
        });
        console.log('new contactos',this.state.newContacts.length);
        console.log('Total contactos',this.state.contacts.length);
    };

    getRandomContact = () => {
        let {newContacts, contacts}=this.state;
        let randomNumber = contacts[Math.floor (Math.random()*contacts.length)];
        let numRan = (Math.floor (Math.random()*contacts.length));

        newContacts.push(randomNumber);

        // console.log('random number',numRan);
        // console.log('new contacts',newContacts.length);
        // console.log('tamaño contactos', contacts.length);
        this.setState({newContacts})
    };

    getOrderbyname = () =>{
        let {newContacts}=this.state;

        newContacts.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
        this.setState({newContacts});
    };

    delBtn = () => {
        
    };

    render(){

        return(
            <div className={styles}>
                <Random getRandom={this.getRandomContact}/>
                <Byname byName={this.getOrderbyname}/>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th> <Delebtn {} /> </th>
                    </tr>
                    {
                        this.state.newContacts.map((contact, i ) =>
                        < Column key={i} contact={contact}
                        />)
                    }
                </table>
            </div>
        )
    }
}

export default Home;